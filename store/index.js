import Vue from "vue";
import Vuex from "vuex";
import api from "../api/routers.js";


Vue.use(Vuex);

const state = () => ({
  user: [],
  data: {},
  routes: {
    register: {
      api: "auth/signup"
    },
    login: {
      api: "auth/login"
    },
  },
});

const getters = {
  user: (state) => state.user,
};

const mutations = {
  SAVE_USER(state, newUser) {
    state.user = newUser
    localStorage.token = newUser.token
    localStorage.user = JSON.stringify(newUser)
    this.$router.push({
      path: "/userpage"
    })
  },
  PARSE_USER(state) {
    state.user = JSON.parse(localStorage.user)
  },
};

const actions = {
  CHECK_ME({
    commit
  }) {
    if (!localStorage.token) {
      // Редирект по имени компонента
      this.$router.push({
        path: "/register"
      })
    }
  },
  LOG_OUT({commit}) {
    localStorage.clear()
    this.$router.push({
      path: '/'
    });
  },
  REGISTER({
    commit
  }) {
    event.preventDefault()

    let obj = {}
    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
      obj[key] = value
    })

    api.post({
        api: state().routes.register.api,
        obj
      })
      .then(res => {
        if (res.status == 200 || res.status == 201 || res.status == 202) {
          localStorage.user = JSON.stringify(res.data)
          localStorage.token = res.data.token
          this.$router.push({
            path: "/userpage"
          })
        }
      })
      .catch(err => {
        console.log(err);
      })
  },
  LOGIN({
    commit
  }) {
    let obj = {}
    let form = new FormData(event.target)

    form.forEach((value, key) => {
      obj[key] = value
    })

    api.post({
        api: state().routes.login.api,
        obj
      })
      .then(res => {
        if (res.status == 200 || res.status == 201 || res.status == 202) {
          commit('SAVE_USER', res.data)
        }
      })
      .catch(err => {
        console.log(err);
      })
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

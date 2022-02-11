import api from './index.js'

export default {
    get(data) {
        return api().get(data.api)
    },
    post(data) {
        return api().post(data.api, data.obj)
    }
}
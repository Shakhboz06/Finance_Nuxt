import axios from "axios"

export default () => {
    const options = {}

    options.baseURL = "https://finance-app-wepro.herokuapp.com/"
    options.contentType = "application/json"

    const instance = axios.create(options)

    return instance

}
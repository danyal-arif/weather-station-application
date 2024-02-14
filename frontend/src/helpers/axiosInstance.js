import axios from "axios";
console.log(process.env.VUE_APP_BACKEND_URL)
const http = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    headers: {
        "Content-type": "application/json",
        "Authorization": typeof localStorage !== 'undefined' ? localStorage.getItem('token') : undefined
    }
});

http?.interceptors.request.use(
    config => {
        config.headers['authorization'] = typeof localStorage !== 'undefined' ? `${localStorage.getItem('token')}` : undefined
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

http?.interceptors.response.use(function (response) {
    return response
}, function (error) {
    const status = error?.response?.status || 0
    if (status === 401) {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            window.location.assign('/auth/login')
            return Promise.reject(error)
        } else {
            return Promise.reject(error)
        }
    }
    return Promise.reject(error)
})

export default http
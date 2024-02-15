function getToken() {
    return localStorage.getItem('token')
}

export const isAuthenticated = () => {
    if (getToken()) return true
    else return false
}
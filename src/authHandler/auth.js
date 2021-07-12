export const setToken = (token, username) => {
    sessionStorage.setItem('id_token', token)
    sessionStorage.setItem('username', username)
}

export const getToken = () => {
    return sessionStorage.getItem('id_token')
}

export const logout = callback => {
    sessionStorage.removeItem('id_token')
    sessionStorage.removeItem('username')
    callback()
}

export const verifyLogin = () => {
    const token = getToken()
    if (token) {
        return true
    }
    return false
}
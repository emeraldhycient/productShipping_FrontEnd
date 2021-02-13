import axios from "axios"

export const setToken = token => {
    localStorage.setItem('id_token', token)
}

export const getToken = token => {
    return localStorage.getItem('id_token')
}

export const logout = token => {
    localStorage.removeItem('id_token')
}

export const verifyLogin = () => {
    let token
    const formdata = new FormData()
    formdata.append('verifylogin', 'verify')

    axios({
            method: "post",
            url: 'http://localhost/rald/producttrackerapi/api_v1/controller/access.php',
            data: formdata
        })
        .then(res => {
            if (res.data.status === 'success') {
                token = res.data.token;
                console.log(res);
            }

        })
        .catch(err => console.error(err))

    let storedtoken = localStorage.getItem('id_token')

    if (storedtoken !== token) {
        return false
    }

    return true

}
// ✨ implement axiosWithAuth
import axios from "axios";

function axiosWithAuth () {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {Authorization: token}
    })
}

export default axiosWithAuth;
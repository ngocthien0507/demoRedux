import { hostAPI } from '../configs/index';
import axios from 'axios';
const localHost = 'api/testing';

export const requestTodoList = async (endpoint, method, data, ) => {
    const header = 'fake user token';

    return axios({
        method: method,
        url: `${hostAPI}/${localHost}/${endpoint}?sortBy=completed`,
        header: header,
        data: data,
    })
        .then(response => { console.log(response.data); return response.data })
        .catch(er => console.log("er: ", er));
}

export const deleteRequest = async (endpoint, method, id) => {
    const url = `${hostAPI}/${localHost}/${endpoint}/`;
    if (method == "delete") {
        return axios.delete(url + id)
            .then(response => { console.log(response.data); return response.data })
            .catch(er => console.log("er: ", er));
    }
}
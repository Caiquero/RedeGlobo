import Axios from 'axios';

export const rootUrl = 'http://localhost/blog/public/';

export const Http = Axios.create({
    baseURL: rootUrl

})
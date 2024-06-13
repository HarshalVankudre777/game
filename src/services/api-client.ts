import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key : 'f67c7182107e4a1899ed855dba2eb5ed'
    }
});

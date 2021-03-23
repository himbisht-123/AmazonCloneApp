import * as axios from 'axios';


const instance=axios.create({
    baseURL:'http://localhost:5001/cloneapp-78c64/us-central1/api'
});
export  default instance;
import Axios from "axios";

// const URL = "http://localhost:4444/person"
export class UserService {
    readApi() {
        return Axios.get("http://localhost:4444/person")
    }
    deleteApi(id) {
        // return Axios.delete("http://localhost:4444/person/"+id);
        return Axios.delete(`http://localhost:4444/person/${id}`);
    }
    createApi(data) {
        return Axios.post("http://localhost:4444/person", data)
    }
    getApiById(id) {
        return Axios.get(`http://localhost:4444/person/${id}`)
    }
    updateApi(data, id) {
        return Axios.patch(`http://localhost:4444/person/${id}`, data)
    }
}

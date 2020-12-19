import Axios from "axios";

// const URL = "http://localhost:4444/person"
export class UserService {
    getUsers() {
        return Axios.get("http://localhost:4444/person")
    }
    deleteUser(id) {
        // return Axios.delete("http://localhost:4444/person/"+id);
        return Axios.delete(`http://localhost:4444/person/${id}`);
    }
    createUser(data) {
        return Axios.post("http://localhost:4444/person", data)
    }
}

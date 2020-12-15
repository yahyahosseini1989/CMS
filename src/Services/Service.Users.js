import Axios from "axios";

export class UserService {
    getUsers() {
        return Axios.get("http://localhost:4444/person")
    }
}

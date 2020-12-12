import Axios from "axios";

export class UserService {
    getAll() {
        return Axios.get("http://localhost:4444/person")
    }
}

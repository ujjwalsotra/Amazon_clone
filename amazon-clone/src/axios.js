import axios from "axios";

const instance =axios.create({
    baseURL:'http://localhost:5001/student-hub-9bbd8/us-central1/api'//API URL (CLOUD FUNCTION URL)
});

export default instance;
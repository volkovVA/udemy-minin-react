import axios from "axios";

export default axios.create({
  baseURL: 'https://react-quiz-634c7-default-rtdb.europe-west1.firebasedatabase.app/'
})
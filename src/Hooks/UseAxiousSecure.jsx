import axios from "axios"


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const UseAxiousSecure = () => {
  return axiosSecure;
}

export default UseAxiousSecure

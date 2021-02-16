import axios from 'axios'

const Api = axios.create({
    baseURL:'https://mysterious-everglades-58663.herokuapp.com/'
})
export default Api
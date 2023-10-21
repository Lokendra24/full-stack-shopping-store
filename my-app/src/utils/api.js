import axios from 'axios'

const base_url='http://localhost:1337'

const params = {
    headers:{
        Authorization :  "bearer " + "0660ec1d81a3309f428c97d1ac9f906b8116b93255b66844cd3dad9e6e16097c821219f454d7c064971f0759b41b2b9ec8f9faa652033df87453e14090f3e81e57fd60766a2453d819566c22e795b6f510b19856477f67b42e8fcb0f46009897257c9f43ccc22248c2b9f26b17ffc5124f927e5f93c8dc5ed3eaa72f8e9b9c67"
    }
}

const fetchDatafromApi= async (url)=>{
    const {data}= await axios.get(`${base_url}/${url}`,params)
    return data
}

export {fetchDatafromApi} 
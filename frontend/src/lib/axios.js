import axios from 'axios'  ; 

export const axiosInstance =  axios.create({
     baseURL:"https://certificategenrator-p34p.onrender.com/" ,
    withCredentials : true , 
}) 
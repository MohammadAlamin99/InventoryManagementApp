import axios from "axios";
let BaseURL = "http://localhost:5020";


export  async function UserRegistrationRequiest(email,firstName,lastName,mobile,password,photo) {
    try {
        let reqBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password, photo:photo}
        let result = await axios.post(BaseURL+'/api/v1/Registration',reqBody);
        return result;
    }
    catch (e) {
        return false
    }
 }



 export  async function UserLoginRequiest(email,password) {
    try {
        let reqBody={email:email,password:password}
        let result = await axios.post(BaseURL+'/api/v1/login',reqBody);
        return result;
    }
    catch (e) {
        return false
    }
 }
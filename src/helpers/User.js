import Token from "./Token"
import AppStorage from './AppStorage'
import axios from 'axios'
class User {
    login(email,password){
        axios.post('https://reqres.in/api/login',{
            email:email,
            password:password
        })
        .then(res => {
            this.responseAfterLogin(res)})
        .catch(error => error.response.data)
    }

    responseAfterLogin(res){
        const access_token = res.data.token
        if(Token.isValid(access_token)) {
            AppStorage.store(access_token)
            window.location = '/forum'
        }
    }

    hasToken() {
        const storeToken = AppStorage.getToken();
        if(storeToken){
            return Token.isValid(storeToken) ? true : false
        }

        return false

    }
    loggedIn(){
        return this.hasToken()
    }
    logout(){
        AppStorage.clear();
        window.location = '/login'
    }
    id(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }
}

export default User = new User()
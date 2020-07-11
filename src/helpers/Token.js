class Token{

    isValid(token){
        const payload = this.payload(token);
        if(payload)
        {
            return payload.iss == "https://reqres.in/api/login" || "https://reqres.in/api/register" ? true : false
        }

        return false
    }

    payload(token){
        const payload = token
        return payload
    }

    decode(payload){
        return JSON.parse(atob(payload))
    }
}

export default Token = new Token()
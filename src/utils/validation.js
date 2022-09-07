

export default class validation {

    static user = username =>{
        return (username && username.length >=3) ? true:false
    }
    static todo = todo =>{
        return (todo) ? true:false
    }
}

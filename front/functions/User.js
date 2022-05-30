class User{
    constructor(user, password){
        this.user = user;
        this.password = password;
    }




    serialize(){
        let json=JSON.stringify(this);
        return json;
    }

    getUser(){
        return this.user;
    }
    getPassword(){
        return this.password;
    }
    setUser(user){
        this.user = user;
    }
    setPassword(password){
        this.password = password;
    }
}
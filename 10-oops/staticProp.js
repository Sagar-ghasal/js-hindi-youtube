class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`)
    }

    createId(){
        return `123`
    }

    static createId1(){
        return `1231`
    }
}

const hitesh = new User("hitesh");

console.log(hitesh.createId())
// console.log(hitesh.createId1())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com");

console.log(iphone.createId());
console.log(iphone.createId1());
// iphone.logMe();

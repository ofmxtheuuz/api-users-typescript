import User from "../entity/User";

// "database" users
let Users: User[] = [
    new User("Matheus", "matheus@gmail.com", "Matheus123!"),
    new User("Joao", "joao@gmail.com", "Joao123!"),
    new User("Pedro", "pedro@gmail.com", "Pedro123!"),
];

// export
export default {
    // get all users
    get() {
        return Users;
    },
    // find user with his email
    findByEmail(email: string): User | undefined {
        return Users.find(usr => usr.email === email);
    },
    // save user on "database" (register)
    save(User: User) {
        Users.push(User);
    },
    // login user
    login(email: string, password: string): boolean {
        let user = this.findByEmail(email);
        if(user != undefined) if(user.password === password) return true; 
        return false;
    },
}
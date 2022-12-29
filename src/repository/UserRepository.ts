import User from "../Entity/User";

let Users: User[] = [
    new User("Matheus", "matheus@gmail.com", "Matheus123!"),
    new User("Joao", "joao@gmail.com", "Joao123!"),
    new User("Pedro", "pedro@gmail.com", "Pedro123!"),
];

export default {
    get() {
        return Users;
    },
    findByEmail(email: string): User | undefined {
        return Users.find(usr => usr.email === email);
    },
    save(User: User) {
        Users.push(User);
    },
    login(email: string, password: string): boolean {
        let user = this.findByEmail(email);
        if(user != undefined) if(user.password === password) return true; 
        return false;
    },
}
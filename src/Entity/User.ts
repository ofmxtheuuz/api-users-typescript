// model user

// export
export default class User {
    // properties
    name: string;
    email: string;
    password: string;

    // constructor
    constructor(
        name: string,
        email: string,
        password: string
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

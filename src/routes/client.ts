import e from "connect-flash";
import express, { Request, Response, NextFunction } from "express"
import User from "../entity/User";
import UserRepository from "../repository/UserRepository";
const router = express.Router();


// initial (index)
router.get("/", (req: Request, res: Response) => {
    let user = UserRepository.get();
    let n = user.map((user: User)=> {
        return user.email
    })
    res.json({
        code: 200,
        content: n
    })
})


// login
// on body, needs "email" field and "password" field
router.post("/login", (req: Request, res: Response) => {
    let email = req.body.email;
    let password = req.body.password;

    if (UserRepository.login(email, password)) {
        res.json({
            code: 200,
            status: "approved"
        })
    } else {
        res.json({
            code: 200,
            status: "rejected"
        })
    }
})

// register
// on body, needs "name" field, "email" field and "password" field
router.post("/register", (req: Request, res: Response) => {
    let name = req.body.name
    let email = req.body.email;
    let password = req.body.password;
    UserRepository.save(new User(name, email, password));
    res.json({
        code: 200,
        status: "saved"
    })
})

// export router
export default router;
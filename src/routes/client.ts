import e from "connect-flash";
import express, { Request, Response, NextFunction } from "express"
import User from "../Entity/User";
import UserRepository from "../repository/UserRepository";
const router = express.Router();



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

export default router;
// imports
    // express
        import express, { Request, Response, NextFunction } from 'express'
        const app = express()

    // messages 
        import { server, database, error } from './helpers/messages';

    // others
        import * as handlebars from 'express-handlebars'
        import * as path from 'path';
        import * as session from 'express-session';
        import * as parser from "cookie-parser"
        import * as logger from "morgan"

// application config
    // views config
        app.set('views', path.join(__dirname, 'views'));

    // handlebars config (template engine)
        app.engine('handlebars', handlebars.engine({ defaultLayout: "main" }));
        app.set('view engine', 'handlebars');

    // session config
        app.use(session.default({
            secret: "21831DSA2391DS236ASDSA7812DAASS23213DSA27",
            resave: true,
            saveUninitialized: true,
            cookie: { maxAge: 2 * 60 * 1000 }
        }));

    // uses
        app.use(express.static(path.join(__dirname, 'public')));
        app.use(logger.default("dev"))
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(parser.default());

    // routes
        import client from "./routes/client";
        app.use('/', client)

    // port config (listen)
        app.listen(3000, () => {
            server("Servidor aberto e operando na porta 3000: http://localhost:3000");
        })
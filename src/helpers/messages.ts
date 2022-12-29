import * as chalk from 'chalk';

// message logger

// server message
export function server(message: string) {
    console.log(chalk.default.blue("[Server] ") + message);
}

// database message
export function database(message: string) {
    console.log(chalk.default.green("[Database] ") + message);
}

// error message
export function error(error: string) {
    console.log(chalk.default.red("[Error] ") + error);
}
import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers;
    const userAgent = req.headers;
    console.log('Iniciando log');
    next();
}

export {
    logMiddleware
}
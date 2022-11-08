import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface RequestExten extends Request {
    user?: JwtPayload | { email: string };
}
import { Request, Response, NextFunction } from 'express';
import { getPosts} from './post.service';

export const index = (
    // @ts-ignore
    request: Request,
    // @ts-ignore
    response: Response,
    // @ts-ignore
    next: NextFunction

) => {
    if (request.headers.authorization !== 'SECRET') {
        return next(new Error());
    }
    const posts = getPosts();
    response.send(posts);
};
import { Response, Request } from "express";

export const aggregateQuery = (
    req: Request<any, any, any, any>,
    res: Response,
    next: () => any
) => {
    if (req.query.skip) {
        req.query.skip = parseInt(req.query.skip);
    }
    if (req.query.take) {
        req.query.take = parseInt(req.query.take);
    }
    next();
};

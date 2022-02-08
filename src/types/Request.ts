import { Request as ExpressRequest } from "express";

export interface Request<
    AccountModel extends { id: number },
    T = any,
    ResBody = any,
    ReqBody = any,
    ReqQuery = any
> extends ExpressRequest<T, ResBody, ReqBody, ReqQuery> {
    account?: AccountModel;
}

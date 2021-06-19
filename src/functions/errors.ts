import { HTTP } from "../types/Http";
import { Response } from "express";

export const sendError = (error: Error, res: Response) => {
    console.error(error);
    res.status(HTTP.SERVER_ERROR).json(error);
};

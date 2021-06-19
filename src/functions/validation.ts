import Joi from "joi";
import { Request, Response } from "express";
import { HTTP } from "../types/Http";
import { Repository } from "typeorm";

/*
If the request is not valid, it will send a 400 request with details
and return false.
Otherwise, it will return true.
 */
export const validateRequest = async <T>(
    schema: Joi.Schema,
    req: Request<T>,
    res: Response
): Promise<boolean> => {
    try {
        await schema.validateAsync(req.body);
        return true;
    } catch (error) {
        res.status(HTTP.BAD_REQUEST).json(
            error.details.map(err => err.message)
        );
        return false;
    }
};

interface RecordExistsProps<T> {
    repo: Repository<T>;
    properties: {
        name: string;
        value: any;
    }[];
    res: Response;
    existingRecord?: T;
}

/*
Returns true if it's okay to proceed with this operation because there is
no conflict.
Returns false if there is a conflict and the operation must be aborted.
 */
export const doesNotConflict = async <T>({
    repo,
    properties,
    res,
    existingRecord,
}: RecordExistsProps<T>): Promise<boolean> => {
    const conflictingProperties: string[] = [];

    for (let pair of properties) {
        let conflict = false;
        const matchingRecord = await repo.findOne({ [pair.name]: pair.value });
        if (matchingRecord) {
            conflict = matchingRecord["id"] !== existingRecord["id"];
        } else {
            // there is no existing record to compare against...
            // this is not unique
            conflict = true;
        }
        if (conflict) {
            conflictingProperties.push(pair.name);
        }
    }

    if (conflictingProperties.length) {
        res.status(HTTP.CONFLICT).json({ conflictingProperties });
    }

    return conflictingProperties.length === 0;
};

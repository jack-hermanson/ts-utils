import { HTTP } from "../types/Http";
import { Response } from "express";

export const sendError = (error: Error, res: Response) => {
    console.error(error);
    res.status(HTTP.SERVER_ERROR).json(error);
};

/**
 * Returns a string for error messages when you get a 409.
 * @param conflictingProperties - Comes from the response.
 * @param name - The name of the type of item you attempted to create/edit.
 * @param useAn - Use "an" instead of "a"; i.e., name begins with a vowel.
 */
export const conflictError = (
    conflictingProperties: string[],
    name?: string,
    useAn?: boolean
): string => {
    return `A${useAn && "n"} ${
        name ? name : "record"
    } already exists with the same ${conflictingProperties.join(", ")}.`;
};

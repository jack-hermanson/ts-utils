import { AlertType } from "../types/AlertType";

export const errorAlert = (text: string): AlertType => {
    return {
        text,
        color: "danger",
    };
};

export const successAlert = (
    noun: string,
    pastTenseVerb: string
): AlertType => {
    return {
        text: `${noun.charAt(0).toUpperCase()}${noun.substr(
            1
        )} ${pastTenseVerb} successfully.`,
        color: "success",
    };
};

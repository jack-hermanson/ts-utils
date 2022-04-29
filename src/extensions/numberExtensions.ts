declare global {
    interface Number {
        /**
         * @description - Round a decimal number to a specified number of places.
         * @param digits - The number of digits after the decimal point.
         */
        round(digits?: number): number;
    }
}

Number.prototype.round = function (digits = 2) {
    let someNum = Number(this);
    const multiplier = Math.pow(10, digits);

    return Math.round((someNum + Number.EPSILON) * multiplier) / multiplier;
};

export {};

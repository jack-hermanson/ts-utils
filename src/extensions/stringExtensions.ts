declare global {
    interface String {
        /**
         * @description - Capitalize the first letter of a string.
         */
        capitalizeFirst(): string;

        /**
         * @description - Make a string plural depending on the number.
         *
         * @param count - The number used to determine if it is plural.
         * @param ending - The suffix added to the word to make it plural.
         */
        pluralize(count: number, ending?: string): string;
    }
}

String.prototype.capitalizeFirst = function() {
    let someString = String(this);
    return `${someString.charAt(0).toUpperCase()}${someString.substr(1)}`;
}

String.prototype.pluralize = function(count, ending = "s") {
    let someString = String(this);
    return `${someString}${count !== 1 ? ending : ""}`;
}

export {};
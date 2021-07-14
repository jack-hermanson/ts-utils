declare global {
    interface Date {
        /**
         * @description: Format the date for datetime-local input. Ex: 1999-04-13T22:28.
         * (yyyy-MM-ddThh:mm)
         */
        toInputFormat(): string;
    }
}

Date.prototype.toInputFormat = function (): string {
    let someDate = new Date(this);

    const yyyy = someDate.getFullYear();
    const MM = someDate.getMonth().toString().padStart(2, "0");
    const dd = someDate.getDate().toString().padStart(2, "0");
    const hh = someDate.getHours().toString().padStart(2, "0");
    const mm = someDate.getMinutes().toString().padStart(2, "0");

    return `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
};

export {};

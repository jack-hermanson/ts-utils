declare global {
    interface String {
        capitalizeFirst(): string;
    }
}

String.prototype.capitalizeFirst = function() {
    let string = String(this);
    return `${string.charAt(0).toUpperCase()}${string.substr(1)}`;
}

export {}
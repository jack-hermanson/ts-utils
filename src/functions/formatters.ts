export function formatPhoneNumber(phoneNumberString: string): string {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        const intlCode = match[1] ? "+1 " : "";
        return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join(
            ""
        );
    }
    return "";
}

export function formatMoney(dollarAmt: number): string {
    return `$${dollarAmt.toFixed(2)}`;
}

export function formatPercent(percentage: number): string {
    return `${percentage.toFixed(3)}%`;
}

/**
 * @deprecated - Use the string extension .capitalizeFirst() instead.
 * @param text - The string you want to capitalzie the first letter of.
 */
export function capitalizeFirst(text: string): string {
    return `${text.charAt(0).toUpperCase()}${text.substr(1)}`;
}

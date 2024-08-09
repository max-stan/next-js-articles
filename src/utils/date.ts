import {format, localeFormat} from "light-date";

export const getFormattedDate = (date) => {
    const dateObj = new Date(date);

    return `${localeFormat(dateObj, '{MMMM}')} ${format(dateObj, '{dd}, {yyyy}')}`;
}
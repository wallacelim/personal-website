/* Utility function for parsing HTML from an input string
 * Retrieved from https://stackoverflow.com/questions/31259295/javascript-allow-only-specific-html-tags
 */

export const stripTags = (input, allowed) => {
    const allowedFormatted = (
        `${allowed || ""}`.toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
    ).join(""); // making sure the allowedFormatted arg is a string containing only tags in lowercase (<a><b><c>)
    const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input
        .replace(commentsAndPhpTags, "")
        .replace(tags, ($0, $1) =>
            allowedFormatted.indexOf(`<${$1.toLowerCase()}>`) > -1 ? $0 : ""
        );
};

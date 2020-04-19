/* Utility function for parsing HTML from an input string
 *  Retrieved from https://stackoverflow.com/questions/31259295/javascript-allow-only-specific-html-tags
 */

export const strip_tags = (input, allowed) => {
    allowed = (
        `${allowed || ""}`.toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
    ).join(""); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input
        .replace(commentsAndPhpTags, "")
        .replace(tags, function ($0, $1) {
            return allowed.indexOf(`<${$1.toLowerCase()}>`) > -1 ? $0 : "";
        });
};

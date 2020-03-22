import { TOGGLE_VIEW_MODE } from "../actionTypes";

export const DARK_THEME = {
    TYPE: "DARK",
    BACKGROUND_PRIMARY: "#282a36",
    BACKGROUND_SECONDARY: "#44475a",
    HEADER_PRIMARY: "#8be9fd",
    HEADER_SECONDARY: "#f1fa8c",
    TEXT_PRIMARY: "#f8f8f2",
    TEXT_SECONDARY: "#ff79c6",
    TEXT_NEGATIVE: "#718096",
    DEFAULT_BORDER: "2px solid #f1fa8c",
};

export const LIGHT_THEME = {
    TYPE: "LIGHT",
    BACKGROUND_PRIMARY: "#FFFFFF",
    BACKGROUND_SECONDARY: "#E2E8F0",
    HEADER_PRIMARY: "#000000",
    HEADER_SECONDARY: "#2D3748",
    TEXT_PRIMARY: "#718096",
    TEXT_SECONDARY: "#A0AEC0",
    TEXT_NEGATIVE: "#f8f8f2",
    DEFAULT_BORDER: "2px solid #2D3748",
};

export default function (state = DARK_THEME, action) {
    switch (action.type) {
    case TOGGLE_VIEW_MODE:
        return state === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    default:
        return state;
    }
}

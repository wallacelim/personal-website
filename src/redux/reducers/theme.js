import { TOGGLE_THEME } from "../actionTypes";
import { DARK_THEME, LIGHT_THEME } from "../../constants/themes";


export default function (state = DARK_THEME, action) {
    switch (action.type) {
    case TOGGLE_THEME:
        return state === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    default:
        return state;
    }
}

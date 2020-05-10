import moment from "moment";
import { ADD_POST } from "../actionTypes";
import { CONTENT_TYPE } from "../../constants/post";

const initialState = {
    isFetching: false,
    data: [
        {
            title: "Learning the basics of Redux Thunks",
            segments: [
                {
                    header: "What is a thunk?",
                    body: [
                        {
                            type: CONTENT_TYPE.TEXT,
                            content: `Essentially, thunks are functions returned by functions. For
                            instance:`,
                        },
                        {
                            type: CONTENT_TYPE.CODE,
                            content: `
                            function wrapper() {
                                return function thunk() {
                                    // In Redux, another dispatch / API call is usually nested here. For example:
                                    fetch('/data);
                                };
                            }`,
                        },
                    ],
                },

                {
                    header: "How does redux-thunk work?",
                    body: [
                        {
                            type: CONTENT_TYPE.TEXT,
                            content: `
                            It is a middleware which calls functions which are passed in as
                            actions. It's implementation is short and sweet:
                            `,
                        },
                        {
                            type: CONTENT_TYPE.CODE,
                            content: `                        
                            function createThunkMiddleware(extraArgument) {
                                return ({ dispatch, getState }) => next => action => {
                                    
                                    if (typeof action === 'function') {
                                        return action(dispatch, getState, extraArgument);
                                    }

                                    return next(action);
                                };
                            }
                            
                            const thunk = createThunkMiddleware();
                            thunk.withExtraArgument = createThunkMiddleware;
                            
                            export default thunk;
                            `,
                        },
                    ],
                },
            ],
            author: "5e667f9e46ef5c862de56b6b",
            categories: ["Redux"],
            date: moment("2020-03-16").toDate(),
            hidden: false,
        },
        {
            title: "Debounced Functions Practice",
            segments: [
                {
                    type: CONTENT_TYPE.TEXT,
                    content: "Whatever is typed into here",
                },
                {
                    type: CONTENT_TYPE.INPUT,
                    content: "Input text",
                    onChange: "{(e) => debouncedSetText(e.target.value)}",
                },
                {
                    type: CONTENT_TYPE.TEXT,
                    content: "will be echoed after",
                },
                {
                    type: CONTENT_TYPE.INPUT,
                    content: "Input text",
                    onChange:
                        "{(e) => setDebounceWait(parseInt(e.target.value, 10))}",
                },
                {
                    type: CONTENT_TYPE.TEXT,
                    content: "miliseconds",
                },
                {
                    type: CONTENT_TYPE.HEADER_TERTIARY,
                    content: "{text}",
                    style: "{{color: theme.SECONDARY}}",
                },
            ],
            author: "5e667f9e46ef5c862de56b6b",
            categories: ["Javascript"],
            date: moment("2020-03-30").toDate(),
            hidden: false,
        },
    ],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        default:
            return state;
    }
}

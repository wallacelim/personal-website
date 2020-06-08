import React from "react";
import { Text, HeaderSecondary, HeaderTertiary } from "../../constants/fonts";
import CodeEditor from "../../components/CodeEditor";

export default () => (
    <>
        <HeaderSecondary>
            Learning the basics of Redux Thunks - Mar 30 2020
        </HeaderSecondary>
        <HeaderTertiary>What is a thunk?</HeaderTertiary>
        <Text>
            Essentially, thunks are functions returned by functions. For
            instance:
        </Text>

        <CodeEditor code={EXAMPLE_THUNK_CODE} />

        <HeaderTertiary>Why use redux-thunk?</HeaderTertiary>
        <Text>
            Since reducers are pure functions by convention, dispatching API
            calls/actions should not be accomplished within them. As such, we
            can use the redux-thunk middleware to perform these actions.
        </Text>
        <HeaderTertiary>How does redux-thunk work?</HeaderTertiary>
        <Text>
            It is a middleware which calls functions which are passed in as
            actions. Essentially, it allows us to dispatch functions as actions.
            It's implementation is short and sweet:
        </Text>
        <CodeEditor code={REDUX_THUNK_CODE} />
    </>
);

const EXAMPLE_THUNK_CODE = `
    function wrapper() {
        return function thunk() {
            // In Redux, another dispatch / API call is usually nested here. 
            // For example:
            fetch('/data);
        };
    }
    `;

const REDUX_THUNK_CODE = `
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
    `;

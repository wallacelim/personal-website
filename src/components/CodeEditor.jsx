import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

export default ({ code }) => (
    <AceEditor
        value={code}
        highlightActiveLine
        mode="javascript"
        theme="monokai"
        setOptions={aceEditorOptions}
        style={aceEditorStyles}
        maxLines={Infinity}
    />
);

const aceEditorStyles = {
    width: "100%",
    "border-radius": "20px",
    zIndex: 0,
    fontSize: "16px",
};

const aceEditorOptions = {
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false,
    showLineNumbers: true,
    tabSize: 4,
};

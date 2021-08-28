import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import RawHTML from "@editorjs/raw";
import Embed from "@editorjs/embed";
import List from "@editorjs/list"
import { Formik, Form } from "formik"
import axios from "axios"

axios.defaults.withCredentials = true;


const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: "codex-editor",
    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */

    tools: {
        header: Header,
        raw: RawHTML,
        list: List,
        embed: {
            class: Embed,
            config: {
                services: {
                    youtube: true
                }
            }
        }
    },
    /**
     * onReady callback
     */
    onReady: () => {
        console.log("Works");
    },
    /**
     * This Tool will be used as default
     */
    // initialBlock: "myOwnParagraph",
    placeholder: "Write stuff here"
});

class Editor extends React.Component {
    save = () => {
        editor
            .save()
            .then(outputData => {
                console.log("Data: ", outputData);
            })
            .catch(error => {
                console.log("Saving failed: ", error);
            });
    };

    render() {
        return (
            <div>
                Editor <button onClick={this.save} type="submit">Save</button>
                <div id="codex-editor" name="codex"/>
            </div>
        );
    }
}

export default Editor;
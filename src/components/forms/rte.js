import React, {Component} from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
export default class RTE extends Component{
    constructor(props){
        super(props);
        this.state = {
            editorState:EditorState.createEmpty()
        }
        this.onrtchange=this.onrtchange.bind(this)
    }
    onrtchange(editorState){
     this.setState({editorState}, this.props.rtechange(
         draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
         )
         )
    }
    render(){
    return (
        <div>
            <Editor
            editorState={this.state.editorState}
            wrapperClassName="demo"
            editorClassName="editor"
            onEditorStateChange={this.onrtchange}
            />
        </div>
    )
    }
}
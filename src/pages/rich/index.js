import React, {Fragment, PureComponent} from 'react';
import {Button, Card, Modal} from 'antd';
import {Editor} from 'react-draft-wysiwyg';
import draftjs from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.scss'

class Rich extends PureComponent {
    state = {
        editorState: '',
        editorContent: '',
        showRichText: false
    };

    handleClear = () => {
        this.setState({
            editorState: ''
        })
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        })
    };

    onEditorChange = (editorContent) => {
        this.setState({
            editorContent
        })
    };

    handleGetText = () => {
        this.setState({
            showRichText: true
        })
    };
    handleCloseRich = () => {
        this.setState({
            showRichText: false
        })
    };


    render() {
        const {editorState, editorContent, showRichText} = this.state;
        return (
            <Fragment>
                <Card>
                    <Button type="primary" onClick={this.handleClear}>清空内容</Button>
                    <Button type="primary" onClick={this.handleGetText}>获取HTML文本</Button>
                </Card>
                <Card title="富文本编辑器">
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                        onContentStateChange={this.onEditorChange}
                    />
                </Card>
                <Modal
                    title="富文本"
                    visible={showRichText}
                    onCancel={this.handleCloseRich}
                    footer={null}
                    bodyStyle={{minHeight: 300, maxHeight: 500, overflowY: 'auto',}}
                >
                    {draftjs(editorContent)}
                </Modal>
            </Fragment>

        );
    }
}

export default Rich;

import React, {PureComponent} from 'react';
import {Button, Card, message} from 'antd';

class Message extends PureComponent {

    handleClick = (type) => {
        message[type](`${type}今天学习React了吗？`)
    };

    render() {
        return (
            <div>
                <Card title="全局消息提示框">
                    <Button type="primary" onClick={() => this.handleClick('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleClick('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleClick('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.handleClick('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.handleClick('loading')}>Loading</Button>
                </Card>
            </div>
        );
    }
}

export default Message;

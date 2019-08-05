import React, {PureComponent} from 'react';
import {Card, Button, notification} from 'antd'
import './index.scss'

class Notice extends PureComponent {

    handleClick = (type, position) => {
        if (position) {
            notification.config({
                placement: position,
            });
        }

        notification[type]({
            message: type,
            description: '今天学习React了吗？',
        });
    };

    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleClick('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleClick('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleClick('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.handleClick('error')}>Error</Button>
                </Card>
                <Card title="通知提醒框-位置" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleClick('success','topLeft')}>Success-TopLeft</Button>
                    <Button type="primary" onClick={() => this.handleClick('info','topRight')}>Info-TopRight</Button>
                    <Button type="primary" onClick={() => this.handleClick('warning','bottomLeft')}>Warning-BottomLeft</Button>
                    <Button type="primary" onClick={() => this.handleClick('error','bottomRight')}>Error-BottomRight</Button>
                </Card>
            </div>
        );
    }
}

export default Notice;

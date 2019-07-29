import React, {PureComponent} from 'react';
import {Card, Button, Icon} from 'antd';
import './index.scss'

class Buttons extends PureComponent {
    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Button</Button>
                    <Button type="default">Button</Button>
                    <Button type="dashed">Button</Button>
                    <Button type="danger">Button</Button>
                    <Button disabled={true}>Button</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button><Icon type="plus"/>添加</Button>
                    <Button><Icon type="edit"/>编辑</Button>
                    <Button><Icon type="delete"/>删除</Button>
                    <Button type="primary" shape="circle" icon="search"/>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
            </div>

        )
    }
}

export default Buttons

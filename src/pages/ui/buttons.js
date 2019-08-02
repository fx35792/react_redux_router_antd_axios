import React, {PureComponent} from 'react';
import {Card, Button, Icon, Radio} from 'antd';
import './index.scss'

const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

class Buttons extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            radioDefaultValue: 'default'
        }
    }

    handleChangeRadio = (e) => {
        this.setState({
            radioDefaultValue: e.target.value
        })
    };

    render() {
        const {radioDefaultValue} = this.state;
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
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading>确定</Button>
                    <Button type="primary" shape="circle" loading/>
                    <Button loading>点击加载</Button>
                </Card>
                <Card title="按钮组" className="card-wrap-two">
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left"/>
                            返回
                        </Button>
                        <Button type="primary">
                            前进
                            <Icon type="right"/>
                        </Button>
                    </ButtonGroup>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <RadioGroup value={radioDefaultValue} onChange={this.handleChangeRadio}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </RadioGroup>
                    <Button type="primary" size={radioDefaultValue}>
                        按钮尺寸
                    </Button>
                </Card>
            </div>

        )
    }
}

export default Buttons

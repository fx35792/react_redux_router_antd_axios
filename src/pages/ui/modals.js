import React, {PureComponent} from 'react';
import {Card, Button, Modal, message} from 'antd';
import './index.scss'

class Modals extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, type: 'Open', status: 'openOne'},
                {id: 2, type: '自定义页脚', status: 'openTwo'},
                {id: 3, type: '顶部20px弹框', status: 'openThree'},
                {id: 4, type: '水平垂直居中', status: 'openFour'},
            ],
            dataTwo: [
                {id: 1, type: 'Confirm', status: 'openOne'},
                {id: 2, type: 'Info', status: 'openTwo'},
                {id: 3, type: 'Success', status: 'openThree'},
                {id: 4, type: 'Warning', status: 'openFour'},
            ],
            openOne: false,
            openTwo: false,
            openThree: false,
            openFour: false,
            type: ''
        }
    }

    handleOpenModal = (type) => {
        this.setState({
            [type]: true,
            type
        })
    };

    handleOk = (type) => {
        this.setState({
            [type]: false
        }, () => {
            message.success(`谢谢你的学习-${type}`);
        })
    };

    handleCancel = (type) => {
        this.setState({
            [type]: false
        })
    };

    commonModal = (type) => {
        let data = {
            title: '',
            content: '',
            visible: false,
            okText: '',
            cancelText: ''
        };
        if (type === 'openOne') {
            data.title = 'Open';
            data.content = '欢迎学习慕课新推出的React高级课程-Open';
            data.visible = this.state.openOne
        } else if (type === 'openTwo') {
            data.title = '自定义页脚';
            data.content = '欢迎学习慕课新推出的React高级课程-自定义页脚';
            data.visible = this.state.openTwo;
            data.okText = '好的';
            data.cancelText = '算了';
        } else if (type === 'openThree') {
            data.title = '顶部20px弹框';
            data.content = '欢迎学习慕课新推出的React高级课程-顶部20px弹框';
            data.visible = this.state.openThree
        } else if (type === 'openFour') {
            data.title = '水平垂直居中';
            data.content = '欢迎学习慕课新推出的React高级课程-水平垂直居中';
            data.visible = this.state.openFour
        }
        return data;
    };

    handleOpenMsgModal = (type) => {
        const title = '确认？';
        const content = '你确定你学会了React了吗？';
        Modal[type.toLowerCase()]({
            title: title,
            content: (
                <div>
                    <p>{content}</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() {
                console.log('ok')
            },
            onCancel() {
                console.log('cancel')
            }
        });
    };

    render() {
        const {type, data, dataTwo} = this.state;
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    {data && data.map((item) => (
                        <Button key={item.id} type="primary" onClick={() => this.handleOpenModal(item.status)}>
                            {item.type}
                        </Button>
                    ))}
                </Card>
                <Modal
                    title={type && this.commonModal(type).title}
                    visible={type ? this.commonModal(type).visible : false}
                    onOk={() => this.handleOk(type)}
                    onCancel={() => this.handleCancel(type)}
                    okText={type === 'openTwo' && this.commonModal(type).okText}
                    cancelText={type === 'openTwo' && this.commonModal(type).cancelText}
                    style={type === 'openThree' && {top: 20}}
                    wrapClassName={type === 'openFour' && "vertical-center-modal"}
                >
                    {type && this.commonModal(type).content}
                </Modal>
                <Card title="信息确认框">
                    {dataTwo && dataTwo.map((item) => (
                        <Button key={item.id} type="primary" onClick={() => this.handleOpenMsgModal(item.type)}>
                            {item.type}
                        </Button>
                    ))}
                </Card>
            </div>
        )
    }
}

export default Modals;

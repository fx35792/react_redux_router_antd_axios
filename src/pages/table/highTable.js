import React, {Fragment, PureComponent} from 'react';
import {Card, Table, Button, Modal, message, Badge} from 'antd';
import axios from 'src/axios/'

class HighTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'id',
                    dataIndex: 'id',
                    width: 100
                }, {
                    title: '用户名',
                    dataIndex: 'userName',
                    width: 100
                }, {
                    title: '性别',
                    dataIndex: 'sex',
                    width: 100,
                    render(text) {
                        return text === 1 ? '男' : '女'
                    }
                }, {
                    title: '爱好',
                    dataIndex: 'interest',
                    width: 100,
                    render(abc) {
                        let config = {
                            '1': '游泳',
                            '2': '打篮球',
                            '3': '踢足球',
                            '4': '跑步',
                            '5': '爬山',
                            '6': '骑行',
                            '7': '桌球',
                            '8': '麦霸'
                        };
                        return config[abc];
                    }
                }, {
                    title: '状态',
                    dataIndex: 'state',
                    width: 100,
                    render(state) {
                        let config = {
                            '1': '咸鱼一条',
                            '2': '风华浪子',
                            '3': '北大才子',
                            '4': '百度FE',
                            '5': '创业者'
                        };
                        return config[state];
                    }
                }, {
                    title: '生日',
                    dataIndex: 'birthday',
                    width: 200
                }, {
                    title: '地址',
                    dataIndex: 'address',
                }, {
                    title: '早起时间',
                    dataIndex: 'time',
                    width: 100
                }],
            columnsOne: [
                {
                    title: 'id',
                    dataIndex: 'id',
                    fixed: 'left',
                    width: 100
                }, {
                    title: '用户名',
                    dataIndex: 'userName',
                    fixed: 'left',
                    width: 100
                }, {
                    title: '性别',
                    dataIndex: 'sex',
                    width: 100,
                    render(text) {
                        return text === 1 ? '男' : '女'
                    }
                }, {
                    title: '爱好',
                    dataIndex: 'interest',
                    width: 100,
                    render(abc) {
                        let config = {
                            '1': '游泳',
                            '2': '打篮球',
                            '3': '踢足球',
                            '4': '跑步',
                            '5': '爬山',
                            '6': '骑行',
                            '7': '桌球',
                            '8': '麦霸'
                        };
                        return config[abc];
                    }
                }, {
                    title: '状态',
                    dataIndex: 'state',
                    width: 100,
                    render(state) {
                        let config = {
                            '1': '咸鱼一条',
                            '2': '风华浪子',
                            '3': '北大才子',
                            '4': '百度FE',
                            '5': '创业者'
                        };
                        return config[state];
                    }
                }, {
                    title: '生日',
                    key: 'birthday',
                    dataIndex: 'birthday',
                    width: 200
                }, {
                    title: '生日',
                    key: 'birthday1',
                    dataIndex: 'birthday',
                    width: 200
                }, {
                    title: '生日',
                    key: 'birthday2',
                    dataIndex: 'birthday',
                    width: 200
                }, {
                    title: '生日',
                    key: 'birthday3',
                    dataIndex: 'birthday',
                    width: 200
                }, {
                    title: '生日',
                    key: 'birthday4',
                    dataIndex: 'birthday',
                    width: 200
                }, {
                    title: '地址',
                    dataIndex: 'address',
                }, {
                    title: '早起时间',
                    dataIndex: 'time',
                    fixed: 'right',
                    width: 100
                },],
            columnsTwo: [
                {
                    title: 'id',
                    dataIndex: 'id',
                    width: 100
                }, {
                    title: '用户名',
                    dataIndex: 'userName',
                    width: 100
                }, {
                    title: '性别',
                    dataIndex: 'sex',
                    width: 100,
                    render(text) {
                        return text === 1 ? '男' : '女'
                    }
                }, {
                    title: '爱好',
                    dataIndex: 'interest',
                    width: 100,
                    render(abc) {
                        let config = {
                            '1': '游泳',
                            '2': '打篮球',
                            '3': '踢足球',
                            '4': '跑步',
                            '5': '爬山',
                            '6': '骑行',
                            '7': '桌球',
                            '8': '麦霸'
                        };
                        return config[abc];
                    }
                }, {
                    title: '状态',
                    dataIndex: 'state',
                    width: 100,
                    render(state) {
                        let config = {
                            '1': '咸鱼一条',
                            '2': '风华浪子',
                            '3': '北大才子',
                            '4': '百度FE',
                            '5': '创业者'
                        };
                        return config[state];
                    }
                }, {
                    title: '生日',
                    dataIndex: 'birthday',
                    width: 200
                }, {
                    title: '地址',
                    dataIndex: 'address',
                }, {
                    title: '早起时间',
                    dataIndex: 'time',
                    width: 100
                }],
            columnsFour: [
                {
                    title: 'id',
                    dataIndex: 'id',
                    width: 50
                }, {
                    title: '用户名',
                    dataIndex: 'userName',
                    width: 80
                }, {
                    title: '性别',
                    dataIndex: 'sex',
                    width: 70,
                    render(text) {
                        return text === 1 ? '男' : '女'
                    }
                }, {
                    title: '爱好',
                    dataIndex: 'interest',
                    width: 80,
                    render(abc) {
                        let config = {
                            '1': '游泳',
                            '2': '打篮球',
                            '3': '踢足球',
                            '4': '跑步',
                            '5': '爬山',
                            '6': '骑行',
                            '7': '桌球',
                            '8': '麦霸'
                        };
                        return config[abc];
                    }
                }, {
                    title: '程度',
                    key: 'interest1',
                    dataIndex: 'interest',
                    width: 100,
                    render(abc) {
                        let config = {
                            '1': <Badge status="success" text="成功"/>,
                            '2': <Badge status="error" text="报错"/>,
                            '3': <Badge status="default" text="正常"/>,
                            '4': <Badge status="processing" text="进行中"/>,
                            '5': <Badge status="warning" text="警告"/>,
                        };
                        return config[abc];
                    }
                }, {
                    title: '状态',
                    dataIndex: 'state',
                    width: 100,
                    render(state) {
                        let config = {
                            '1': '咸鱼一条',
                            '2': '风华浪子',
                            '3': '北大才子',
                            '4': '百度FE',
                            '5': '创业者'
                        };
                        return config[state];
                    }
                }, {
                    title: '生日',
                    dataIndex: 'birthday',
                    width: 200
                }, {
                    title: '地址',
                    dataIndex: 'address',
                }, {
                    title: '早起时间',
                    dataIndex: 'time',
                    width: 100
                }, {
                    title: '操作',
                    dataIndex: 'operation',
                    render: (text, record) => {
                        return <Button type="primary" size="small" onClick={() => {
                            this.handleDelete(record)
                        }}>删除</Button>
                    }
                }],
        }
    }

    componentDidMount() {
        this.requestList()
    }

    param = {
        page: 1
    };

    requestList = () => {
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.param.page
                },
                isShowLoading: true
            }
        }).then((res) => {
            if (res.code === 0) {
                // console.log('res', res);
                let list = [];
                res.result && res.result.list && res.result.list.map((item, index) => {
                    list.push({
                        ...item,
                        key: index
                    });
                    return list
                });
                this.setState({
                    dataSource: list
                })
            }
        })
    };

    handleChange = (pagination, filters, sorter) => {
        console.log('::', sorter);
        this.setState({
            sortOrder: sorter.order
        })
    };

    //删除操作
    handleDelete = (record) => {
        // console.log(record);
        Modal.confirm({
            title: '确定',
            content: `您确定删除${record.userName}此条数据吗？`,
            onOk: () => {
                message.success('删除成功');
                this.requestList();
            }
        })
    };

    render() {
        const {columns, columnsOne, columnsFour, dataSource} = this.state;
        const columnsThree = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 100
            }, {
                title: '用户名',
                dataIndex: 'userName',
                width: 100
            }, {
                title: '性别',
                dataIndex: 'sex',
                width: 100,
                render(text) {
                    return text === 1 ? '男' : '女'
                }
            }, {
                title: '年龄',
                dataIndex: 'age',
                width: 100,
                sorter: (a, b) => {
                    return a.age - b.age
                },
                sortOrder: this.state.sortOrder
            }, {
                title: '爱好',
                dataIndex: 'interest',
                width: 100,
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    };
                    return config[abc];
                }
            }, {
                title: '状态',
                dataIndex: 'state',
                width: 100,
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    };
                    return config[state];
                }
            }, {
                title: '生日',
                dataIndex: 'birthday',
                width: 200
            }, {
                title: '地址',
                dataIndex: 'address',
            }, {
                title: '早起时间',
                dataIndex: 'time',
                width: 100
            }];
        return (
            <Fragment>
                <Card title="高级表格-固定表头">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataSource}
                        scroll={{y: 216}}
                    />
                </Card>
                <Card title="高级表格-左右固定中间可以滚动" style={{marginTop: 10}}>
                    <Table
                        bordered
                        columns={columnsOne}
                        dataSource={dataSource}
                        scroll={{x: 2000}}
                    />
                </Card>
                <Card title="高级表格-年龄排序" style={{marginTop: 10}}>
                    <Table
                        bordered
                        columns={columnsThree}
                        dataSource={dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="高级表格-按钮操作" style={{marginTop: 10}}>
                    <Table
                        bordered
                        columns={columnsFour}
                        dataSource={dataSource}
                        pagination={false}
                    />
                </Card>
            </Fragment>
        );
    }
}

export default HighTable;

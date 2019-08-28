import React, {PureComponent, Fragment} from 'react';
import {Table, Card} from 'antd';
import axios from 'src/axios/'

class BasicTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: 'id',
                dataIndex: 'id'
            }, {
                title: '用户名',
                dataIndex: 'userName'
            }, {
                title: '性别',
                dataIndex: 'sex',
                render(text) {
                    return text === 1 ? '男' : '女'
                }
            }, {
                title: '状态',
                dataIndex: 'state',
                render(text) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    };
                    return config[text]
                }
            }, {
                title: '爱好',
                dataIndex: 'interest',
                render(text) {
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
                    return config[text]
                }
            }, {
                title: '生日',
                dataIndex: 'birthday'
            }, {
                title: '地址',
                dataIndex: 'address'
            }, {
                title: '时间',
                dataIndex: 'time'
            },],
            dataSource: [],
        }
    }

    componentDidMount() {
        this.requestList()
    }

    requestList = () => {
        axios.ajax({
            url: '/table/list',
            data: {
                param: {
                    page: 1
                }
            }
        }).then((res) => {
            console.log(res)
            if (res.code === 0) {
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

    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey
        })
    };

    render() {
        const {columns, dataSource, selectedRowKeys} = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        };

        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            },
            getCheckboxProps: record => ({
                disabled: record.id === 1, // Column configuration not to be checked
                name: `${record.id}`,
            }),
        };
        return (
            <Fragment>
                <Card title="基础表单">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="基础表单-单选" style={{marginTop: 10}}>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index)
                                }
                            }
                        }}
                        pagination={false}
                    />
                </Card>
                <Card title="基础表单-多选" style={{marginTop: 10}}>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        rowSelection={rowCheckSelection}
                        pagination={false}
                    />
                </Card>
                <Card title="基础表单-多选-分页" style={{marginTop: 10}}>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        rowSelection={rowCheckSelection}
                        pagination={true}
                    />
                </Card>
            </Fragment>

        );
    }
}

export default BasicTable;

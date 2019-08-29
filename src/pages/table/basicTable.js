import React, {PureComponent, Fragment} from 'react';
import {Table, Card, Button, message, Modal} from 'antd';
import axios from 'src/axios/';
import Utils from 'src/utils';

class BasicTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [],
            selectedCheckRowKeys: [],
            selectedRows: null,
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

    param = {
        page: 1
    };

    //列表数据请求封装
    requestList = () => {
        let _this = this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.param.page
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                let list = [];
                res.result && res.result.list && res.result.list.map((item, index) => {
                    list.push({
                        ...item,
                        key: index
                    });
                    return list
                });
                console.log('res',res);
                this.setState({
                    dataSource: list,
                    selectedRowKeys: [],
                    selectedCheckRowKeys: [],
                    selectedRows: null,
                    pagination: Utils.pagination(res, (current) => {
                        _this.param.page = current;
                        this.requestList()
                    })
                })
            }
        })
    };

    //radio 单行选择操作
    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey
        })
    };

    //checkbox 删除操作
    handleDelete = () => {
        const {selectedCheckRowKeys} = this.state;
        console.log('selectedRowKeys', selectedCheckRowKeys);
        if (selectedCheckRowKeys.length <= 0) {
            message.warning('请选择一条数据');
            return false
        }
        Modal.confirm({
            title: '删除提示',
            content: `您确定要删除这些数据吗？${selectedCheckRowKeys.join(',')}`,
            onOk: () => {
                message.success('删除成功');
                this.requestList();
            }
        })
    };

    render() {
        const {columns, dataSource, selectedRowKeys, selectedCheckRowKeys} = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        };

        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys: selectedCheckRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.setState({
                    selectedCheckRowKeys: selectedRowKeys,
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
                    <div>
                        <Button type="primary" onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        rowSelection={rowCheckSelection}
                        pagination={this.state.pagination}
                    />
                </Card>
            </Fragment>

        );
    }
}

export default BasicTable;

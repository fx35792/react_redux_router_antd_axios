import React, {Component, Fragment} from 'react';
import {Card, Col, DatePicker, Form, Input, InputNumber, Row, Select} from 'antd';
import styles from './index.less';

const FormItem = Form.Item;
const Option = Select.Option;


class City extends Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Fragment>
                <Card className={styles.tableListForm}>
                    <Form layout="inline" >
                        <Row gutter={{md: 8, lg: 24, xl: 48}}>
                            <Col md={8} sm={24}>
                                <FormItem label="规则名称">
                                    {getFieldDecorator('name')(<Input placeholder="请输入"/>)}
                                </FormItem>
                            </Col>
                            <Col md={8} sm={24}>
                                <FormItem label="使用状态">
                                    {getFieldDecorator('status')(
                                        <Select placeholder="请选择" style={{width: '100%'}}>
                                            <Option value="0">关闭</Option>
                                            <Option value="1">运行中</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col md={8} sm={24}>
                                <FormItem label="调用次数">
                                    {getFieldDecorator('number')(<InputNumber style={{width: '100%'}}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row gutter={{md: 8, lg: 24, xl: 48}}>
                            <Col md={8} sm={24}>
                                <FormItem label="更新日期">
                                    {getFieldDecorator('date')(
                                        <DatePicker style={{width: '100%'}} placeholder="请输入更新日期"/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col md={8} sm={24}>
                                <FormItem label="使用状态">
                                    {getFieldDecorator('status3')(
                                        <Select placeholder="请选择" style={{width: '100%'}}>
                                            <Option value="0">关闭</Option>
                                            <Option value="1">运行中</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col md={8} sm={24}>
                                <FormItem label="使用状态">
                                    {getFieldDecorator('status4')(
                                        <Select placeholder="请选择" style={{width: '100%'}}>
                                            <Option value="0">关闭</Option>
                                            <Option value="1">运行中</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Fragment>
        );
    }
}

export default Form.create({})(City);

// class FilterForm extends Component {
//     render() {
//         const {getFieldDecorator} = this.props.form;
//         return (
// <div>1</div>
//         )
//     }
// }
//
// FilterForm = Form.create({})(FilterForm);

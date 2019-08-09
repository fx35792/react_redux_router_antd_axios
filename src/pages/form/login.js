import React, {PureComponent, Fragment} from 'react';
import {Card, Form, Input, Button, Icon, Checkbox, message} from 'antd';
import {NavLink} from 'react-router-dom';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 8
    }
};

class Login extends PureComponent {

    handleSubmit = () => {
        const {validateFields, getFieldsValue} = this.props.form;
        const userInfo = getFieldsValue();
        console.log('userInfo', userInfo);
        validateFields((err, value) => {
            if (!err) {
                console.log(value)
                message.success('恭喜你登录成功！')
            }
        })
    };

    render() {
        const {form} = this.props;
        const {getFieldDecorator} = form;
        return (
            <Fragment>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input type="password" placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop: 10}}>
                    <Form>
                        <FormItem {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {required: true, message: '用户名不能为空'},
                                        {min: 5, max: 16, message: '请输入5~16之间的字符'},
                                        {pattern: new RegExp('^\\w+$', 'g'), message: '用户名必须是数组或者字母'}
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '密码不能为空'
                                    }]
                                })(
                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout}>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                    rules: [{
                                        required: true,
                                        transform: value => (value || undefined),  // Those two lines
                                        type: 'boolean',                           // Do the magic
                                        message: 'Please agree the terms and conditions.',
                                    }]
                                })(
                                    <Checkbox value={true}>记住我</Checkbox>
                                )
                            }
                            <NavLink to="" style={{float: 'right'}}>忘记密码</NavLink>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </Fragment>

        );
    }
}

export default Form.create()(Login);

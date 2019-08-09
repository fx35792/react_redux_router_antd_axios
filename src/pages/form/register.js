import React, {PureComponent} from 'react';
import {
    Card,
    Form,
    Input,
    Radio,
    InputNumber,
    Select,
    Switch,
    DatePicker,
    TimePicker,
    Upload,
    Icon,
    Modal,
    Checkbox,
    Button,
    message,
    LocaleProvider
} from 'antd';
import moment from 'moment';
import zh_CN from 'antd/es/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const SelectOption = Select.Option;
const TextArea = Input.TextArea;
const formItemLayout = {
    labelCol: {
        xs: 24,
        sm: 4
    },
    wrapperCol: {
        xs: 24,
        sm: 12
    }
};

const formItemLayoutOne = {
    wrapperCol: {
        xs: 24,
        sm: {
            span: 4,
            offset: 4
        }
    }
}


class Register extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            userImg: [{
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }, {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },]
        }
    }

    changeDate = () => {

    };

    selectDate = () => {

    };

    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    beforeUpload = () => {

    };

    onPreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await this.getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleCancel = () => {
        this.setState({
            previewVisible: false,
        });
    };

    handleUploadChange = ({file, fileList}) => {
        if (file.status === "removed") {
            // this.props.onSuccess && this.props.onSuccess(fileList.map(item => item.response && item.response.data || item), 'delete')
        }
        if (file.status === 'done') {
            // this.props.onSuccess && this.props.onSuccess(fileList.map(item => item.response && item.response.data || item))
            // if (!file.response.success) {
            //     message.error(file.response.errorMsg || '上传错误', 5);
            // }
        }
        let FileMaxNum = 10;
        if (fileList) {
            fileList = fileList.slice(0, FileMaxNum);
            fileList.forEach(file => {
                if (file.response && !file.response.success) {
                    file.status = 'error';
                }
            })
        }
        this.setState({
            fileList: fileList,
            NoHandowProps: true
        });
        this.setState({userImg: fileList});
    };

    handleSubmit = () => {
        const {validateFields, getFieldsValue} = this.props.form;
        const registerInfo = getFieldsValue();
        console.log('registerInfo', registerInfo)
        validateFields((err, value) => {
            if (!err) {
                console.log('value', value);
                message.success('注册成功!')
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {userImg, previewVisible, previewImage} = this.state;
        return (
            <Card title="注册表单">
                <Form>
                    <FormItem {...formItemLayout} label="用户名">
                        {
                            getFieldDecorator('userName', {
                                initialValue: '',
                                rules: [
                                    {required: true, message: '用户名不能为空'},
                                    {min: 5, max: 16, message: '用户名范围在5~16字符之间'},
                                    {pattern: new RegExp('^\\w+$', 'g'), message: '用户名必须为数字和字母'}
                                ]
                            })(
                                <Input placeholder="请输入用户名"/>
                            )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="密码">
                        {
                            getFieldDecorator('password', {
                                initialValue: '',
                                rules: [
                                    {required: true, message: '密码不能为空'}
                                ]
                            })(
                                <Input type="password" placeholder="请输入密码"/>
                            )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="性别">
                        {
                            getFieldDecorator('sex', {
                                initialValue: 1
                            })(
                                <RadioGroup>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                </RadioGroup>
                            )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="年龄">
                        {
                            getFieldDecorator('age', {
                                initialValue: 18
                            })(
                                <InputNumber min={1} placeholder="请输入年龄"/>
                            )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="当前状态">
                        {
                            getFieldDecorator('status', {
                                initialValue: '1'
                            })(
                                <Select>
                                    <SelectOption value="1">咸鱼一条</SelectOption>
                                    <SelectOption value="2">风华浪子</SelectOption>
                                    <SelectOption value="3">北大才子一枚</SelectOption>
                                    <SelectOption value="4">百度FE</SelectOption>
                                    <SelectOption value="5">创业者</SelectOption>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="爱好">
                        {
                            getFieldDecorator('interest', {
                                initialValue: '1'
                            })(
                                <Select mode="multiple">
                                    <SelectOption value="1">读书</SelectOption>
                                    <SelectOption value="2">游泳</SelectOption>
                                    <SelectOption value="3">Coding</SelectOption>
                                    <SelectOption value="4">打羽毛球</SelectOption>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="婚姻状态">
                        {
                            getFieldDecorator('isMarried', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Switch/>
                            )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="生日">
                        <LocaleProvider locale={zh_CN}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('1991-06-12', 'YYYY-MM-DD')
                                })(
                                    <DatePicker
                                        showTime
                                        getCalendarContainer={triggerNode => triggerNode.parentNode}
                                        placeholder="请选择出生年月日"
                                        format="YYYY-MM-DD"
                                        onChange={this.changeDate}
                                        onOk={this.selectDate}
                                    />
                                )
                            }
                        </LocaleProvider>
                    </FormItem>
                    <FormItem {...formItemLayout} label="联系地址">
                        {
                            getFieldDecorator('address', {
                                initialValue: '北京回龙观'
                            })(
                                <TextArea autosize={{minRows: 3, maxRows: 6}} placeholder="请输入联系地址"/>
                            )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="早起时间">
                        {
                            getFieldDecorator('time', {
                                initialValue: moment('06:30', 'HH:mm')
                            })(
                                <TimePicker getPopupContainer={triggerNode => triggerNode.parentNode} format={'HH:mm'}/>
                            )
                        }
                    </FormItem>
                    <FormItem {...formItemLayout} label="图像">
                        {
                            getFieldDecorator('userImg')(
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    accept={'image/*'}
                                    beforeUpload={this.beforeUpload}
                                    onPreview={this.onPreview}
                                    onChange={this.handleUploadChange}
                                    fileList={userImg}
                                    multiple={true}
                                >
                                    {userImg.length > 8 ? null : <Icon type="plus"/>}
                                </Upload>
                            )
                        }
                        <Modal title="预览" visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                            <img alt="example" style={{width: '100%'}} src={previewImage}/>
                            <span>{1 + '/' + userImg.length}</span>
                        </Modal>
                    </FormItem>
                    <FormItem {...formItemLayoutOne}>
                        {
                            getFieldDecorator('read')(
                                <Checkbox>我已阅读过慕课协议</Checkbox>
                            )
                        }
                    </FormItem>
                    <FormItem  {...formItemLayoutOne}>
                        <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                    </FormItem>
                </Form>
            </Card>
        );
    }
}

export default Form.create()(Register);

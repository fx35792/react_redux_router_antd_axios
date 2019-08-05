import React, {PureComponent} from 'react';
import {Card, Spin, Icon, Alert} from 'antd';
import './index.scss'

const antIcon = <Icon type="loading" style={{fontSize: 24}} spin/>;

class Loadings extends PureComponent {
    render() {
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin/>
                    <Spin size="large"/>
                    <Spin indicator={antIcon}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Spin spinning={false}>
                        <Alert
                            message="React"
                            description="Welcome to learn React"
                            type="info"
                        />
                    </Spin>
                    <Spin spinning={true}>
                        <Alert
                            message="React"
                            description="Welcome to learn React"
                            type="info"
                        />
                    </Spin>
                    <Spin spinning={true} tip="加载中...">
                        <Alert
                            message="React"
                            description="Welcome to learn React"
                            type="info"
                        />
                    </Spin>
                    <Spin spinning={true} indicator={antIcon}>
                        <Alert
                            message="React"
                            description="Welcome to learn React"
                            type="info"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}

export default Loadings;

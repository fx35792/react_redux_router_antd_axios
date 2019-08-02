import React, {PureComponent} from 'react';
import {Card} from 'antd';

class noPage extends PureComponent {
    render() {
        return (
            <Card title="" style={{textAlign: 'center', fontSize: '40px'}}>
                <p>404</p>
                <p>对不起亲！我迷路了！</p>
            </Card>
        )
    }
}

export default noPage;

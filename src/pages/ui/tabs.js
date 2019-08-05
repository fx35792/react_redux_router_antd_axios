import React, {PureComponent} from 'react';
import {Card, Tabs, Icon} from 'antd';
import './index.scss';

const {TabPane} = Tabs;

class TabsDemo extends PureComponent {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            {
                title: 'Tab 3',
                content: 'Content of Tab 3',
                key: '3',
                closable: false,
            },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    onChange = activeKey => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        console.log('action===',action);
        console.log('targetKey===',targetKey);
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    handleChange = (value) => {
        console.log(value);
    };

    render() {
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleChange}>
                        <TabPane key="1" tab="Tab 1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane key="2" tab="Tab 2" disabled>
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane key="3" tab="Tab 3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="带图标的Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleChange}>
                        <TabPane
                            key="1"
                            tab={
                                <span>
                                    <Icon type="plus"/>
                                    Tab 1
                                </span>
                            }
                        >
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane
                            key="2"
                            tab={
                                <span>
                                    <Icon type="edit"/>
                                    Tab 1
                                </span>
                            }
                        >
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane
                            key="3"
                            tab={
                                <span>
                                    <Icon type="delete"/>
                                    Tab 1
                                </span>
                            }
                        >
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab页签可增加可删除" className="card-wrap">
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                {pane.content}
                            </TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default TabsDemo;

import React, {PureComponent} from 'react';
import {Menu} from 'antd';
import MenuConfig from 'src/config/menuConfig';
import {NavLink} from 'react-router-dom';
import './index.scss'

const {SubMenu} = Menu;

class NavLeft extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            menuTreeNode: []
        }
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }


    renderMenu = (data) => {
        return data && data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={item.title}>
                        {this.renderMenu(item.children)}}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>  {item.title}</NavLink>
                </Menu.Item>
            )
        })
    };

    handleClick = () => {

    }

    render() {
        const {menuTreeNode} = this.state;
        return (
            <div>
                <div className="logo">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
                    <h1>React MS</h1>
                </div>
                <Menu onClick={this.handleClick} mode="vertical" theme="dark">
                    {menuTreeNode}
                </Menu>
            </div>

        )
    }
}

export default NavLeft;

import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import generateLayout from '../lib/generate-layout';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const data = {
  name: 'Back System',
  nameSize: 18,
  navList: [
    {key: '1', content: 'nav 1'},
    {key: '2', content: 'nav 2'},
    {key: '3', content: 'nav 3'},
  ],
  subNavList: [
    {
      key: 'sub1',
      content: 'subnav 1',
      item: [
        { key: '1', content: 'option1' },
        { key: '2', content: 'option2' },
        { key: '3', content: 'option3' },
        { key: '4', content: 'option4' },
      ]
    },
    {
      key: 'sub2',
      content: 'subnav 2',
      item: [
        { key: '5', content: 'option5' },
        { key: '6', content: 'option6' },
        { key: '7', content: 'option7' },
        { key: '8', content: 'option8' },
      ]
    },
    {
      key: 'sub3',
      content: 'subnav 3',
      item: [
        { key: '9', content: 'option9' },
        { key: '10', content: 'option10' },
        { key: '11', content: 'option11' },
        { key: '12', content: 'option12' },
      ]
    },
  ],
};

class Default extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" style={{float: 'left', fontSize: data.nameSize, color: 'rgba(255, 255, 255, 0.9)', width: 120, height: 31, lineHeight: '31px', margin: '16px 28px 16px 0'}}>{data.name}</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            {data.navList.map(i => (
              <Menu.Item key={i.key}>{i.content}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {data.subNavList.map(i => (
                <SubMenu
                  key={i.key}
                  title={
                    <span>
                      <Icon type="user" />
                      {i.content}
                    </span>
                  }
                >
                  {i.item.map(j => (
                    <Menu.Item key={j.key}>{j.content}</Menu.Item>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div style={{height: 24}}></div>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default generateLayout(Default);

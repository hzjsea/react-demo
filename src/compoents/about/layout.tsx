import React from 'react';
import { Layout } from '@douyinfe/semi-ui';

() => {
    const { Header, Footer, Content } = Layout;

    return (
        <Layout className="components-layout-demo">
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};

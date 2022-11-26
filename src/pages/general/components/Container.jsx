import { Layout } from 'antd';
import '../styles/container.css';

const { Content } = Layout;

const Container = ({child}) => (
  <Content theme="dark" style={{ padding: '0 50px' }}>
    <div className="site-layout-content">
      {child}
    </div>
  </Content>
);

export default Container;
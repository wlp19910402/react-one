import React from 'react';
import { Card, WingBlank, WhiteSpace} from 'antd-mobile';
import {Link}from'react-router-dom'
class HomePage extends React.Component {
  constructor(...args) {
	  super(...args);
		this.state={
		}
  }
  componentDidMount(){
    console.log(this.props.history.location.pathname)
  }
  render() {
    return (
      <div className="qm-login-page qm-fill-width ">
    <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title="This is title"
        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        extra={<span>首页哦</span>}
      />
      <Link to='/login'>去登录</Link>
      <Card.Body>
        <div>This is content of `Card`</div>
      </Card.Body>
      <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
      </div>
    );
  }
}

export default HomePage;
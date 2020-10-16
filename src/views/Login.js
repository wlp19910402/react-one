import React from 'react';
import { List, InputItem, WhiteSpace ,Button,Toast,WingBlank,Flex} from 'antd-mobile';
import { createForm } from 'rc-form';
import {USER_IDNTITY,getIdntityName,getUnIdntityName} from '@/plugins/resurceStatus/user'

class BasicInputExample extends React.Component {
  constructor(...args) {
	  super(...args);
		this.state={
			loginUserIdentity:USER_IDNTITY.BANK_STAFF
		}
	}
  handleClick = () => {
    Toast.info('请输入账号和密码', 1);
  }
  //切换身份登录
  switchIndtify=()=>{
    this.setState({
      loginUserIdentity:this.state.loginUserIdentity===USER_IDNTITY.FOREIGN_STAFF?USER_IDNTITY.BANK_STAFF:USER_IDNTITY.FOREIGN_STAFF
    })
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="qm-login-page qm-fill-width ">
        <div className="qm-title-box sub-title">
          <div className="title">{getIdntityName(this.state.loginUserIdentity)}登录</div>
        </div>
        <Flex justify="center">
          <Flex.Item>
                <WingBlank size="lg" >
                <List>
                  <InputItem  {...getFieldProps('password1')}  placeholder="账号" type="text"></InputItem>
                  </List>
                  <List>
                  <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="密码"
                  ></InputItem>
                </List>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <Button type="primary" onClick={this.handleClick}>登录</Button>
                <WhiteSpace size="md"/>
                <Button type="default" onClick={this.switchIndtify.bind(this)}>切换为“{getUnIdntityName(this.state.loginUserIdentity)}人员”</Button>
                </WingBlank>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);

export default BasicInputExampleWrapper;
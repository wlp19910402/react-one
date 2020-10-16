import React from 'react';
import { List, InputItem, WhiteSpace ,Button,WingBlank,Flex,Toast} from 'antd-mobile';
import { createForm } from 'rc-form';
import {USER_IDNTITY,getIdntityName,getUnIdntityName} from '@/plugins/resurceStatus/user'
import {login} from '@/plugins/requestServer/user'
import {regexp} from '@/plugins/common/regexp'
class BasicInputExample extends React.Component {
  constructor(...args) {
	  super(...args);
		this.state={
      loginUserIdentity:USER_IDNTITY.BANK_STAFF,
      accountId:"",
      passowrd:"",
      hasError:""
		}
  }
  componentDidMount(){
    console.log(9)
  }
  handleClick = () => {
    const { getFieldValue } = this.props.form;
    const accountId = getFieldValue('accountId');
    const password = getFieldValue('pwd');
    if(accountId===undefined||password===undefined){
      Toast.info('账号和密码不能为空', 1);
      return
    }
    if(!regexp.regMobile.test(accountId)){
      Toast.info('请输入正确的11位手机号', 1);
      return
    }
    const data = {
      accountId,
      password,
      accountType: this.state.loginUserIdentity}
    //请求登录
    login(data)
  }
  //切换身份登录
  switchIndtify=()=>{
    this.setState({
      loginUserIdentity:this.state.loginUserIdentity===USER_IDNTITY.FOREIGN_STAFF?USER_IDNTITY.BANK_STAFF:USER_IDNTITY.FOREIGN_STAFF
    })
  }
  onChange = (value) => {
    this.setState({
      accountId: value,
    });
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
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
                <WingBlank size="lg">
                <List>
                  <InputItem {...getFieldProps('accountId')}  placeholder="账号"  type="text"></InputItem>
                </List>
                <List>
                  <InputItem {...getFieldProps('pwd')} type="password" placeholder="密码"></InputItem>
                </List>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
                <Button type="primary" onClick={this.handleClick.bind(this)}>登录</Button>
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
import { Flex, WhiteSpace ,Button,Toast,} from 'antd-mobile';
import React,{Component}from 'react'
import {BrowserRouter as Router,Route,Link}from 'react-router-dom'
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const FlexExample = () => (
  <div className="flex-container">

    <div className="sub-title">Basic</div>
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <Link to="/login"><Button>去登陆哦</Button></Link>
    <WhiteSpace size="lg" />
    <Flex justify="center">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
  </div>
);

function successToast() {
  Toast.success('Load success !!!', 1);
}
// ReactDOM.render(<FlexExample />, mountNode);
class Cmp1 extends Component{
	constructor(...args){
		super(...args)
		this.state={users:[]}
  }
    handleClick = ()=>{
      Toast.info('This is a toast tips !!!', 1);
  }
  render(){
    return (<div>
       <Button  type="primary" onClick={this.handleClick}>测试antd</Button>
       <Button type="warning" onClick={successToast}>loading</Button>
       <FlexExample />
    </div>)
  }
}
export default Cmp1;
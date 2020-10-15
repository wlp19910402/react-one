import React from 'react';
import { List, InputItem, WhiteSpace ,Button,Toast,WingBlank,ImagePicker,SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];
class BasicInputExample extends React.Component {

  state = {
    files: data,
    multiple: false,
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    Toast.info('请输入账号和密码', 1);
  }
  render() {
    const { files } = this.state;
    const { getFieldProps } = this.props.form;
    return (


      <div className="qm-fill-height qm-fill-width ">
         <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
        <div className="sub-title"><div className="title">登录</div></div>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
        <WingBlank>
        <List>
          <InputItem  {...getFieldProps('password1')}  placeholder="请输入账号" type="text" labelNumber={3} >账号</InputItem>
          </List>
          <List>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            labelNumber={3}
            placeholder="请输入密码"
          >密码</InputItem>
          </List>

        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
        <Button type="primary" onClick={this.handleClick}>登录</Button></WingBlank>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>

        <WingBlank>
        <SegmentedControl
          values={['切换到单选', '切换到多选']}
          selectedIndex={this.state.multiple ? 1 : 0}
          onChange={this.onSegChange}
        />
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
      </WingBlank>
      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);

export default BasicInputExampleWrapper;
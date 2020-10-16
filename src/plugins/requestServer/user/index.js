import axios from 'axios'
import { Toast} from 'antd-mobile';

//登录请求
export const login=async (data)=>{
  try{
  let res = await axios({
    url: '/login',
    method: 'post',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    data
  })
  if(res.data.err!=='0'){
    Toast.info(res.data.msg, 1);
    return
    }
    
  console.log(res.data.result)
  }catch(err){
    console.log(err)
  }
}
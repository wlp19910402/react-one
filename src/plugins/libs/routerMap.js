import Test from '@/components/test'
import Login from '@/views/Login'
import Home from '@/views/Home'

/**
 * 路由表
 * @param {*} path:地址
 * @param {*} name:名称
 * @param {*} component:组件
 * @param {*} isAuth:是否需要登录权限
 */
export default[
  {path:'/',name:'测试',component:Test,isAuth:true},
  {path:'/login',name:'登录',component:Login,isAuth:false},
  {path:'/home',name:'首页',component:Home,isAuth:true}
]
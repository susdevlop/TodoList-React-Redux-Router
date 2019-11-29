import React from 'react'
import * as Router from 'react-router-dom'
// 安装了react-router-dom，npm会解析并安装上述依赖包。可以看到，其中包括react-router。
// router. hashrouter&route&link  **path*component
import cssobj from '@/css/TodoList'
import { InputBox ,Doing , Done } from '@/component/TodoList/TodoList'


class App extends React.Component{
  render(){
    return <Router.HashRouter>
      <div className={cssobj.container}>
        <div className={cssobj.header}>
          <div className={cssobj.title}>TodoList</div>
          <span className={cssobj.inputBox}>
            <InputBox />
          </span>
        </div>
        <hr/>
        <div className={cssobj.routelink}>
          <div className={cssobj.link}>
            <Router.NavLink to="/doing" activeClassName={cssobj.selected}> 正在进行</Router.NavLink> &emsp;
          </div>
          <div className={cssobj.link}>
            <Router.NavLink to="/done" activeClassName={cssobj.selected}>已完成</Router.NavLink>
          </div>
        </div>
        <Router.Switch>
          <Router.Route exact path="/">
            <Doing />
          </Router.Route>
          <Router.Route path="/doing">
            <Doing />
          </Router.Route>
          <Router.Route path="/done">
            <Done/>
          </Router.Route>
        </Router.Switch>
      </div>
    </Router.HashRouter>
  }
}
export default App
import React, { Component } from 'react';
import cssobj from '@/css/TodoList'
import { connect } from 'react-redux'
import { OnHandleDeleted,OnHandleComplated } from '@/redux/action'

class TodoListUl extends Component {
  constructor(){
    super()
    this.liFilter = this.liFilter.bind(this)
  }

  liFilter(key){
    return key.filter((item)=>{
      return item.completed!=this.props.isComplated
    })
  }

  render() {
    // 从props中获取原数组
    let [...sortList] = this.props.todos
    // filter后进行排序数组
    let sortedList = this.liFilter(sortList).sort((a,b)=>{
      return a.time < b.time?1:-1
    })
    // 动态生成li
    let ToDoListLi = sortedList.map((item)=>{
      return <li key={item.id} className={cssobj.todoli}>
        <div className={cssobj.limsg}>
          <input type="checkbox" onClick={()=>this.props.OnHandleComplated(item.id)}/>
          {item.title} &emsp;&emsp; 
        </div>
        <div className={cssobj.lidel}>
          add time:{item.time}
          <button onClick={()=>this.props.OnHandleDeleted(item.id)}>del</button>
        </div>
      </li>
    })


    return <React.Fragment>
      <ul className={cssobj.todoul}>
        {ToDoListLi}
      </ul>
    </React.Fragment>
  }
}

const mapStateToProps = (state,ownProps)=>{
  console.log('mapstate:',state);
  return{
    'todos':state.todos,
  }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  return{
    OnHandleComplated : (id)=> {
      return dispatch(OnHandleComplated(id))
    },
    OnHandleDeleted : (id)=>{
      return dispatch(OnHandleDeleted(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListUl)
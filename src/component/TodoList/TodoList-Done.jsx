import React, { Component } from 'react';
import TodoListUl from '@/component/TodoList/TodoList-ul'

class Done extends Component{
  constructor(){
    super()
    this.state = {
      isComplated : false
    }
  }
  // 不需要做什么
  render(){
    return <TodoListUl isComplated={false}/>
  }
}

export default Done;

import { combineReducers } from 'redux';
import { OnHandleDeleted,OnHandleComplated} from '@/redux/action'
// 初始化数据
const initialState = [
  {
  "id": 0,
  "title": "zero",
  "time" : "2019-11-28 19:1:33",
  "completed": false
  },
  {
  "id": 1,
  "title": "one",
  "time" : "2019-11-28 19:1:22",
  "completed": false
  },
  {
  "id": 2,
  "title": "two",
  "time" : "2019-11-28 19:2:22",
  "completed": true
  },
  {
  "id": 3,
  "title": "three",
  "time" : "2019-11-28 19:3:22",
  "completed": false
  },
]

const todos = (state = initialState, action)=>{
  switch (action.type) {
    case 'onHanldeSubmit':
      action.newTodo.id = state.length;
      return [
        ...state,{
          ...action.newTodo
        }
      ]
    case 'OnHandleDeleted':
      let [...deletedList] = state
      deletedList.forEach((item,index) => {
        if(item.id===action.id){
          deletedList.splice(index,1)
        }
      });
      return deletedList
    case 'OnHandleComplated':
        let [...newTodoList] = state
        newTodoList.forEach((item,index) => {
          if(item.id===action.id){
            newTodoList[index].completed = newTodoList[index].completed !=true ? true : false
          }
        });
      return newTodoList
    default:
      return state
  }
}

export default combineReducers({
  todos
})
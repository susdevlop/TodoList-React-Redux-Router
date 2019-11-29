export const onHanldeSubmit = (title,date) =>{
  let newTodo = {
    "title" : title,
    "time" : date,
    "completed" : false,
  }
  return {
    type:'onHanldeSubmit',
    newTodo
  }
}
export const OnHandleDeleted = (id) =>{
  return{
    type:'OnHandleDeleted',
    id
  }
}
export const OnHandleComplated = (id)=>{
  console.log('已返回对象');
  return {
    type:'OnHandleComplated',
    id
  }
}
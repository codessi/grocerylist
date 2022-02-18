//this one works


import React, {useEffect, useState} from "react"

 const list = localStorage.getItem('list')

const getLocalStorage = () => {
 
  if (list !== null){
    return  JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
// localStorage.removeItem('list')
function App () {




  const [value, setValue] = useState("")
  const [todoList, setTodoList] = useState(getLocalStorage())

  console.log(todoList)

  const handleSubmit = e => {
    e.preventDefault()
    const valueObj = {id: new Date().getTime().toString(), value}
    setTodoList([...todoList, valueObj ])
  }
  useEffect ( () => {
    localStorage.setItem('list', JSON.stringify(todoList))
  }, [todoList])



  return(
    <section>
      <h4>Grocery Bud this is setup</h4>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" onChange={(e) => setValue(e.target.value)}/>
        <button type="submit">Submit</button>
        
      </form>
      <ul>
        {todoList.map(el => {
          return(
            <div key={el.id}>
              <li >{el.value}</li>
                        
            </div>
 
          )
        })}
      </ul>
    </section>
  )
}

export default App
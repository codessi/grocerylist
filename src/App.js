import React, {useEffect, useState} from "react"

const list = localStorage.getItem('list')
const getLocalStorage =() => {
    if (list) {
    return JSON.parse(list)
   } 
   return []
}



function App () {

  const [value, setValue] = useState("")
  const [todoList, setTodoList] = useState(getLocalStorage())


  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(todoList))
  }, [todoList])

  const handleSubmit = e => {
    e.preventDefault()
    const valueObj = {id: new Date().getTime().toString(), value}
    setTodoList([...todoList, valueObj ])
    setValue('')
  }

  return(
    <section>
      <h4>Grocery Bud this is setup</h4>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" value = {value} onChange={(e) => setValue(e.target.value)}/>
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
import React, { useRef, useState } from 'react'

interface Iresult{
  [key: string]:any;
}

const Todolist = () => {

  let mytext = useRef<HTMLInputElement>(null)
  const [list, setList] = useState<string[]>([])

  const deepcopy = (obj:any) => {
      if(typeof obj !== 'object' || obj == null){
        return obj
      }
      let result:Iresult
      if(obj instanceof Array){
        result = []
      }else{
        result = {}
      }
      for(let key in obj){
        result[key] = deepcopy(obj[key])
      }

      return result

  }

  return (
    <div>
      <input type="text"  ref={mytext}/>
      <button onClick={() => {
        setList([...list, (mytext.current as HTMLInputElement).value]);
        (mytext.current as HTMLInputElement).value = ''
      }}>add</button>

      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}
          <button onClick={() => {
            let newList:string[] = deepcopy(list)
            newList.splice(index, 1)
            setList(newList)
          }}>delete</button>
          </li>
        })}
      </ul>
      {list.length ===0 && <div>暂无待办事项</div>}
    </div>
  )
}

export default Todolist


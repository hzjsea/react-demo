import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {Button, Toast, Layout, Switch} from '@douyinfe/semi-ui'
// import 'reset-css'
import { useState } from 'react'
import ReactMarkdown  from 'react-markdown'
import remarkGfm from 'remark-gfm'
import * as text from './tp.txt'
import { Text } from 'react-markdown/lib/ast-to-react';
import * as path from 'path';
import {Link, Route} from "react-router-dom";


const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

export default function App(){

  // setState
  // useState(0) 指定了两个内容, data的默认值为0  data的类型是number
  // 你可以调用setData()函数控制data的值 setData(data+1) 每次调用setData都会加1
  const [data, setData] = useState(0)
  // useState里面不仅可以制定值，还可以指定funtion
  // useState里面无论是什么什么内容，都需要完成两个工作
  // 1. c_data 的初始值是多少
  // 2. c_data 的类型是什么
  const [c_data, changeData] = useState(()=>{return 1})


  // 箭头函数 () => function() 你可以把他看成一个匿名函数，包裹了function() 执行的结果给到(), ()里面就只有一个return， 返回被包裹函数执行的结果

  //

  return (
    <div>
      <div>
        <span>setState</span>
        <span>{data}</span>
        <button onClick={()=> setData}> click me </button>
        <button onClick={() =>setData(data +1)}> click me, and data will add 1 </button>
      </div>
      <div>
      <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>
      </div>
    </div>
  )
}

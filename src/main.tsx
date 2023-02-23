import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

import Reduxx from './compoents/reduxxx/reduxx'
import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
  isRouteErrorResponse
} from 'react-router-dom'
import Home, {Abort, Footer,AAA} from "./compoents/flex/flex-group";
import About from "./compoents/about/about";
import FlexScreenComponents from "./compoents/flex/flex-components";
const router = createBrowserRouter([
  {
    path:"/app",
    element:<App/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/error-page",
    element:<ErrorPage/>
  },
  {
    path:"/test-redux",
    element:<Reduxx/>
  },
  {
    path:"/home",
    element:<Home/>,
    children:[
      {
        path:"/home/abort",
        element:<Abort/>,
      ,
      {
        path:"/home/footer",
        element:<Footer/>
      },
      {
        path:"/home/aaa",
        element:<AAA/>
      }
    ]
  },
  // {
  //   path:"/flex",
  //   element:<FlexScreenComponents/>,
  //   children:[],
  // }

])

// const root =  ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(
//   // 严格模式，是一个用来突出显示应用程序中潜在问题的工具， StrictMode 不会渲染任何可见的 UI。它为其后代元素触发额外的检查和警告
//   // https://zh-hans.reactjs.org/docs/strict-mode.html
//   // <React.StrictMode>
//
//   // <div>
//   //   <App/>
//   //   <span>ref hook</span>
//   //   <br/>
//   //   <Refr></Refr>
//   //   <br/>
//   //   <UseEffectr></UseEffectr>
//   //   <br />
//   //   <UserID></UserID>
//   // </div>
//
//   <RouterProvider router={router}/>
//
//   // </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router}/>)



// 错误页面
function ErrorPage(){
  const error = useRouteError() as any;
  console.log(error);

  if (isRouteErrorResponse(error)){
    return(
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText}, {error.status}</i>
        </p>

      </div>
    )
  }

  return <p>{error.message || "Unknown Error"}</p>


}


// 什么是响应式布局

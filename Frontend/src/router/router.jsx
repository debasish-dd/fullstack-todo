import {createBrowserRouter} from "react-router-dom"
import Todo from "../components/todo/Todo.jsx"
import Layout from "../layout/Layout.jsx"
import Home from "../components/home/Home.jsx"


export const router = createBrowserRouter([
  
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'todo',
                element: <Todo/>
            },
            
        ]
    },
])
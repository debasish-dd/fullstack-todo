import {createBrowserRouter} from "react-router-dom"
import Todo from "../components/todo/Todo"
import Layout from "../layout/Layout"
import Home from "./../components/home/Home"
import About from "../components/About"

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
            {
                path: 'about',
                element: <About/>
            }
        ]
    },
])
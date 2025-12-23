import {createBrowserRouter} from "react-router-dom"
import Todo from "../components/todo/Todo"
import App from "../src/App"
import Layout from "../src/layout/Layout"

export const router = createBrowserRouter([
  
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/todo',
                element: <Todo/>
            }
        ]
    },
])
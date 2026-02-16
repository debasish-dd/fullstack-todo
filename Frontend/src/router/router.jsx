import {createBrowserRouter} from "react-router-dom"
import Todo from "../components/todo/Todo.jsx"
import Layout from "../layout/Layout.jsx"
import Home from "../components/home/Home.jsx"
import Login from "../components/navbar/Login.jsx"
import Signup from "../components/navbar/Signup.jsx"

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
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <Signup/>
            }
            
        ]
    },
])
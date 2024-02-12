import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Users from './components/Users/Users';
import UserDetail from './components/UserDetail/UserDetail';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/footer",
        element:<Footer></Footer>
      },
      {
        path:"/users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:"/user/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetail></UserDetail>
      },
      {
        path:"/posts",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:"/post/:variable",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.variable}`),
        element:<PostDetails></PostDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

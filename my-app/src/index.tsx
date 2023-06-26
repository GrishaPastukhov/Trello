import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store';
import Home from './pages/home';
import Galery from './pages/galery';
import Register from './pages/register';
import Login from './pages/login';
import AddPost from './pages/addPost';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>, 
  },
  {
    path:'/galery',
    element:<Galery/>,
  },
  {
    path:'/register',
    element:<Register/>,
  },
  {
    path:'/login',
    element:<Login/>,
  },
  {
    path:'/addPost',
    element:<AddPost/>,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

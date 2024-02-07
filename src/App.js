import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './default/Header'
import { ToastContainer } from 'react-toastify'
import Home from './component/Home'
import Users from './component/user/Users'
import Products from './component/product/Products'
import Create from './component/user/Create';
import CreateProduct from './component/product/CreateProduct'
import Update from './component/user/Update'
import UpProduct from './component/product/UpProduct'
import Pnf from './default/Pnf'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ToastContainer autoClose={2000} position={'bottom-right'} />
      <Routes>
        <Route exact path={`/`} element={<Home/>} />
        <Route exact path={`/users`} element={<Users/>} />
        <Route exact path={`/products`} element={<Products/>} />
        <Route exact path={`/user/create`} element={<Create/>} />
        <Route exact path={`/product/create`} element={<CreateProduct/>} />
        <Route exact path={`/user/edit/:id`} element={<Update/>} />
        <Route exact path={`/product/edit/:id`} element={<UpProduct/>} />
        <Route path={`/*`} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

/* npm i --save react-router-dom react-toastify axios bootstrap bootstrap-icons redux react-redux
npm i --save @reduxjs/toolkit 
*/

/* in server folder install following cmd
json-server --watch data.json --port 5500 */
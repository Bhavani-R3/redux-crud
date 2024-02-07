import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">Redux CRUD</NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collpase navbar-collapse justify-content-end" id="menu">
                    <nav className="navbar-nav">
                       <li className="nav-item">
                            <NavLink to={`/`} className="nav-link">
                                <i className='bi bi-house-door'></i>Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/users`} className="nav-link">
                                <i className='bi bi-person'></i>Users
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/product`} className="nav-link">
                                <i className='bi bi-cart'></i>Products
                            </NavLink>
                        </li>
                    </nav>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
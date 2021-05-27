import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({branding}) => {
    return (
        <nav className='nav navbar navbar-expand-sm bg-danger py-0 navbar-dark mb-3'>
            <div className='container'>
                <a className='navbar-brand' href='/'>{branding}</a>
                <div>
                    <ul className='nav mr-auto'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                                <i className='fas fa-home'/> Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact/add' className='nav-link'>
                                <i className='fas fa-plus'/> Add
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link'>
                                <i className='fas fa-question'/> About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header

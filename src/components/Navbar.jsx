import React from 'react'
import { navLinks } from '../constants'

function Navbar() {
  return (
    <header>
        <nav>
            <img src="/public/logo.svg" />

            <ul>
                {
                navLinks.map(({label}) => (
                    <li key={label}>
                        <a href="label">{label}</a>
                    </li>
                ))
                }
            </ul>

            <div className='flex-center gap-3'>
                <button>
                    <img src="/public/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/public/cart.svg" alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar

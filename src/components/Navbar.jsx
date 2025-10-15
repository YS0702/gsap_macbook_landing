import { navLinks } from '../constants'

function Navbar() {
  return (
    <header>
        <nav>
            <img src="/logo.svg" />

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
                    <img src="/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar

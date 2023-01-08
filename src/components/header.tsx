import {Link} from 'react-router-dom'
export const Header = () =>{
  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'Register',
      path: '/register'
    },
    {
      name: 'Login',
      path: '/login'
    }
  ]

  return (
    <header className="header">
      <nav className='navbar'>
        <Link to='/' className='logo' >SocialMediaApp</Link>
        <ul className='links-list'>
          {
            links.map((link, key) => (
            <li key={key} >
              <Link to={link.path} >{link.name}</Link>
            </li>))
          }
        </ul>
      </nav>
    </header>
  )
}
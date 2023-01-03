import { Link } from 'react-router-dom'
import Search from './Search';


const Header = ({search, setSearch}) => {

  return (
    <>
    <nav className='navbar'>

      <Link to="/" className='link-logo'>
        <img src='https://cdn-icons-png.flaticon.com/128/3183/3183463.png' alt='Logo' /> 
        <h1>Recipe API</h1>
      </Link>

      <div className="inputs">
        
        <Link className="link-nav" to="/categories">Categories</Link>

        <Link className="link-nav" to='/areas'>Country</Link>

        <Search search={search} setSearch={setSearch}/>

      </div>
      
    </nav>
    </>
  )
}

export default Header

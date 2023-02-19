import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react";
import  {ReactComponent as Logo}  from '../../../assets/Logo/crown (1).svg'
import './navigation.styles.scss'
const Navigation =()=>{
    return (
      <Fragment>
        <div className="navigation">

          <Link className="logo-container" to='/'>
            <Logo className='Logo'/>
          </Link>
  
          <div className="nav-links-container">

            <Link className="nav-link" to='/shop'>
              SHOP
            </Link>

            <Link className="nav-link" to='/shop'>
              CONTACT
            </Link>

            <Link className="nav-link" to='/sing-in'>
              SING IN
            </Link>

          </div>
        </div>
        <Outlet/>
      </Fragment>
     
      
    )
  }
  export default Navigation
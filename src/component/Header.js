import React from 'react'
import '../styling/header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from './StateProvider';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
const Header=()=>{
  const [{basket,user}]=useStateValue();
  console.log(user); 
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
    return (
        <div className="header">
         <Link to="/">
            <img 
            className="header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>  
           <div className="header-search">
            <input type="text" className="header-searchInput"></input>
            <SearchIcon className="header-searchIcon"/>
           </div>
           
           <div className="header-nav">
           <Link to={!user && '/login'}> 
             <div onClick={handleAuthentication} className="header-option">
               <span className="header-optionLineOne">Hello, {user?.email}</span>
               <span className="header-optionLineTwo">{user ? "Sign Out":"Sign In"}</span>
             </div>
            </Link> 
             <div className="header-option">
             <span className="header-optionLineOne">Returns</span>
             <span className="header-optionLineTwo">& Orders</span>
             </div>
             <div className="header-option">
             <span className="header-optionLineOne">Your</span>
             <span className="header-optionLineTwo">Prime</span>
             </div>
               <Link to="/checkout">             
               <div className="header-optionbasket">
                <ShoppingCartIcon/>
                <span className="header-optionLineTwo header-basketcount">{basket?.length}</span>
               </div>
               </Link> 
           </div>
        </div>
    )
}

export default Header;

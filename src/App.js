import React ,{useEffect}from 'react';
import Header from './component/Header';
import Homepage from './component/Homepage';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './component/Checkout';
import LoginPage from './component/LoginPage';
import {auth} from './firebase';
import { useStateValue } from './component/StateProvider';
import { Unsubscribe } from '@material-ui/icons';
function App() {
   const [{user},dispatch]=useStateValue();
    useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        console.log('The user is >>',authUser);
          if(authUser){
           dispatch({
             type:'SET_USER',
             user:authUser
           })
          }
          else{
           dispatch({
             type:'SET_USER',
             user:null
           })
          }

      });
      return()=>{
        Unsubscribe();
      }
    },[]);
  console.log('user',user);
  return (
    <Router>
    <div className="App">
     
       <Switch>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/checkout">
          <Header></Header>
           <Checkout></Checkout>
        </Route>
       <Route path="/">
      <Header/>
      <Homepage/>
      </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;

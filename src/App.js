import React ,{useEffect}from 'react';
import Header from './component/Header';
import Homepage from './component/Homepage';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './component/Checkout';
import LoginPage from './component/LoginPage';
import {auth} from './firebase';
import { useStateValue } from './component/StateProvider';
import { Unsubscribe } from '@material-ui/icons';
import Payment from './component/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise=loadStripe('pk_test_51IBCs2DMoSEQ9RXTMXyN7abxXnm5PKTIzOG9Zv74w25NHtYzJsR2iuKE2LXYthriGcYVWDQX13Nw9T1fGVlxB5JY00kvq0a8nU');

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
        <Route path="/payment">
          <Header></Header>
          <Elements stripe={promise}>
          <Payment></Payment>
          </Elements>
          
          
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

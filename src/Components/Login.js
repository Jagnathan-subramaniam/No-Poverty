import React from 'react'
import Navigation from './Navigation'
import "./MainPage.css";

export default function Login() {
  return (
    <>
    <Navigation/>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
            
        <fieldset id='d1'>
          <div id="d2">
            <h5><b>Member Login</b></h5><br />

            <div >

              <lable for="email" className='ha'>Mail ID:</lable>  
              <input className='h' type="email" id='inp1' placeholder=""  required /><br /><br />
            </div>

            <lable for="email" className='ha'>Password:</lable>  
            <input className='hi'type='password' id='inp2' placeholder="  ******"  required /><br /><br />

            <input type='button' id='inp3' value="LOGIN" type="submit" /><br /><br />

            <p id='text'>Forgot <span className=''>Userneme / password ?</span></p><br />

            <a href="#" id='a'>Create your account->.</a>
          

          </div>
        </fieldset>
        <div>

      </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

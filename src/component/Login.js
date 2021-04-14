import React from 'react';
import './Login.css';

const Login = () => {
    return(
        <div>
            <h1>Form Login</h1>
            <form>
                <div className='container'>
                <h3>Tugas Pertemuan ke 3</h3>
                <label for='us'>Username</label>
                <input type = 'text' name='username' id='username' className='username' placeholder='Masukan Username'></input>
                </div>
                <br></br>
                <div>
                    <label for='ps'>Password</label>
                    <input type='password' name='password' id='password' className='password' placeholder='Masukan Password'></input>
                </div>
                <div>
                <button type="button" className=" btn-success">Login</button>
                </div>
                
                <div style={{textAlign:'center'}} >
                    <label>Remember me</label>
                    <input type = 'checkbox' defaultChecked/>
                </div>
                <br></br>
                <div  style={{textAlign:'center'}}>
                    <button type='reset' className ='btn_cancel'> Cancel </button>
                </div>
            </form>
        </div>
        

    );
}
export default Login;
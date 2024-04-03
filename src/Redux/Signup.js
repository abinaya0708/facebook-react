import React,{useState} from "react"
import "./Signup.scss"
import { useDispatch } from 'react-redux'
import {handlesigntolog } from "./Store/Slice"

export const Signup=()=>{
    const[username,setname]=useState("");
    let [surname,setsurname]=useState('')
    const[password,setpass]=useState("");
    const[num,setnum]=useState("")
    const[gen,setgen]=useState("")
    const[isFill,setFill]=useState(false);
    let dispatch=useDispatch()
    const [aob,setaob]=useState(JSON.parse(localStorage.getItem("create"))||[])
    
    console.log(username,password);
    const handle=(e)=>{
        e.preventDefault()
        if(e.target.name==="username"){
           setname(e.target.value)
        }
        else if(e.target.name==="surname"){
            setsurname(e.target.value)
         }
        else if(e.target.name==="mbl"){
            setnum(e.target.value)
        }
        else if(e.target.name==="psw"){
           setpass(e.target.value)
        }
        else if(e.target.name==="gen"){
            setgen(true)
        }
    }
    
    const create=(e)=>{
        e.preventDefault();
        if(username===""||password===""||surname===""||gen===""||num===""){
            setFill(true)
        }
        else if(isFill===false){
            const users={username,num,password}
            setaob([...aob,users])
            localStorage.setItem("create",JSON.stringify([...aob,users]));
            
            dispatch(handlesigntolog(true))
        }
        else{
            setFill(false)
        }

    }

    

    return(
        <div className="signup-page">
            <div className="container">
            <h2>facebook</h2>
                <div className="card">
                    <div className="card-top">
                        <h1>Sign Up</h1>
                        <p>It's quick and easy</p>
                    </div>
                    <hr/>
                    <form>
                        <div className="input-boxes">
                            <div className="name-inputs">
                                <div className="first-name">
                                    <input type="text" placeholder="First name" name="username" onChange={handle} value={username}/>
                                    {isFill&&username==="" ? <p className='error'>*This field cannot be empty</p>:""}
                                </div>
                                <div className="last-name">
                                    <input type="text" placeholder="Surname" name="surname" value={surname} onChange={handle}/>
                                    {isFill&&surname==="" ? <p className='error'>*This field cannot be empty</p>:""}
                                </div>
                    
                            </div>
                            <div className="mbl-input">
                                <input type="text" placeholder="Mobile number or email address" value={num}  onChange={handle} name='mbl'/>
                                {isFill&&num===''?
                                     <p className='error'>Please Enter your Mobile number</p>:""}
                                     {isFill&&num.length===10?
                                    '':<p className='error'>Mobile number must be 10 characters</p>}
                                
                            </div>
                            <div className="psw-input">
                                <input type="password" placeholder="Password" onChange={handle} value={password} name='psw'/>
                                {isFill&&password===''?<p className='error'>Please Enter your password</p>:""}
                                {isFill&&password.length<8?
                                    <p className='error'>password Must have 8 character</p>:''}
                            </div>
                            <div className="Dob">
                                <p>Date Of Birth</p>
                                <div className="dob-details">
                                    <select>
                                        <option value='Jan'>Jan</option>
                                        <option value='Feb'>Feb</option>
                                        <option value='Mar'>Mar</option>
                                        <option value='Apr'>Apr</option>
                                        <option value='May'>May</option>
                                        <option value='Jun'>Jun</option>
                                        <option value='Jul'>Jul</option>
                                        <option value='Aug'>Aug</option>
                                        <option value='Sep'>Sep</option>
                                        <option value='Oct'>Oct</option>
                                        <option value='Nov'>Nov</option>
                                        <option value='Dec'>Dec</option>
                                    </select>
                                    <select>
                                        <option value=''>1</option>
                                        <option value=''>2</option>
                                        <option value=''>3</option>
                                        <option value=''>4</option>
                                        <option value=''>5</option>
                                        <option value=''>6</option>
                                        <option value=''>7</option>
                                        <option value=''>8</option>
                                        <option value=''>9</option>
                                        <option value=''>10</option>
                                        <option value=''>11</option>
                                        <option value=''>12</option>
                                        <option value=''>13</option>
                                        <option value=''>14</option>
                                        <option value=''>15</option>
                                        <option value=''>16</option>
                                        <option value=''>17</option>
                                        <option value=''>18</option>
                                        <option value=''>19</option>
                                        <option value=''>20</option>
                                        <option value=''>21</option>
                                        <option value=''>22</option>
                                        <option value=''>23</option>
                                        <option value=''>24</option>
                                        <option value=''>25</option>
                                        <option value=''>26</option>
                                        <option value=''>27</option>
                                        <option value=''>28</option>
                                        <option value=''>29</option>
                                        <option value=''>30</option>
                                        <option value=''>31</option>
                                    </select>
                                    <select>
                                        <option value=''>1990</option>
                                        <option value=''>1991</option>
                                        <option value=''>1992</option>
                                        <option value=''>1993</option>
                                        <option value=''>1994</option>
                                        <option value=''>1995</option>
                                        <option value=''>1996</option>
                                        <option value=''>1997</option>
                                        <option value=''>1998</option>
                                        <option value=''>1999</option>
                                        <option value=''>2000</option>
                                        <option value=''>2001</option>
                                        <option value=''>2002</option>
                                        <option value=''>2003</option>
                                        <option value=''>2004</option>
                                        <option value=''>2005</option>
                                        <option value=''>2006</option>
                                        <option value=''>2007</option>
                                        <option value=''>2008</option>
                                        <option value=''>2009</option>
                                        <option value=''>2010</option>
                                    </select>
                                </div>
                            </div>
                            <div className="gender">
                                <p>Gender</p>
                                <div className="gender-details">
                                    <div className="radio-btn">
                                        <label for="female">Female</label>
                                        <input type="radio" id="female" value={gen} name="gen" onChange={handle}/>
                                    </div>
                                    <div className="radio-btn">
                                        <label for="male">Male</label>
                                        <input type="radio" id="Male" value={gen} name="gen" onChange={handle}/>
                                    </div>
                                    <div className="radio-btn">
                                        <label for="custom">Custom</label>
                                        <input type="radio" id="custom" value={gen} name="gen" onChange={handle}/>
                                    </div>
                                    
                                </div>
                                {isFill&&gen===''?<p className='error'>Please Choose your Gender</p>:''}
                            </div>
                            <div className="card-content">
                                <p>
                                    People who use our service may have uploaded your contact information to Facebook. <span>Learn more.</span>
                                </p>
                                <p>
                                    BY clicking Sign Up,you agree to our <span>Terms,Privacy Policy</span> and <span>Cookies Policy.</span> You may receive SMS notifications from us and can opt out of any time.
                                </p>
                                <div className="btn-div" >
                                    <button value="Sign Up" onClick={create}>Sign Up</button>
                                </div>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
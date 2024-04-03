import React,{useState} from "react";
import "./Login.scss"
import { useDispatch} from "react-redux";
import {handlesigntolog } from "./Store/Slice"
import { useNavigate } from "react-router-dom";
export const Login=()=>{
    let [phone,setphone]=useState('')
    const[pass,setpass]=useState("");
    const[isFill,setFill]=useState(false);
    const[nameerr,seterr]=useState(false);
    const[pswerr,seterror]=useState(false);
    let dispatch=useDispatch()
    let a=useNavigate()
    
    
    const handle=(e)=>{
        e.preventDefault()
        if(e.target.name==="phone"){
            setphone(e.target.value)
        }
        else if(e.target.name==="pass"){
            setpass(e.target.value)
        }
    }
    const login=(e)=>{
        e.preventDefault()
        if(phone===""||pass===""){
            setFill(true)
        }
        
        else {
            const check=JSON.parse(localStorage.getItem("create")).some((e,i)=>{
                if(e.num!==phone&&e.password!==pass){
                    seterr(true);
                    seterror(true);
                    setFill(false);
                }
                else if(e.num!==phone&&e.password===pass){
                        seterr(true);
                        seterror(false);
                        setFill(false)
                }
                else if(e.num===phone&&e.password!==pass){
                    seterror(true);
                    seterr(false);
                    setFill(false)
                }
                
                    return e.num===phone&&e.password===pass
                

            });
            if(check===true){
                a("/header")
            }
        }
        
    }
    

    
    let sign=()=>{
        dispatch(handlesigntolog(false))
    }

    
    return(
        <div className="login-page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card1">
                            <h1>facebook</h1>
                            <h2>Facebook helps you connect and share with the people in your life.</h2>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card2">
                            <form>
                                <div className="num-div">
                                    <input type="text" placeholder="Email address or phone number" name="phone" id="email" value={phone} onChange={handle}/>
                                    {isFill&&phone===''?
                                        <p className='error'>Please Enter your Mobile number</p>:""}
                                        {isFill&&phone.length===10?
                                        '':<p className='error'>Number must be 10 characters</p>}
                                        {nameerr? <p className='error'>Enter correct email or mobile number</p>:""}
                                </div>
                                <div className="psw-div">
                                    <input type="password" placeholder="Password" name='pass' id="pass" value={pass} onChange={handle} />
                                    {isFill&&pass==="" ? <p className='error'>*This field cannot be empty</p>:""}
                                    {pswerr? <p className='error'>Enter correct password</p>:""}
                                </div>
                                <div className="login-btn">
                                    <button  onClick={login} value="Log in">Log in</button>
                                </div>
                                <hr/>
                                <div className="create-btn">
                                    <button  onClick={sign}>Create new account</button>
                                </div>
                            </form>
                            <div className="card-btm">
                                <p><span>Create a Page</span> for a celebrity, brand or business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
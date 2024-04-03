import React,{useState}from "react";
import "./Header.scss"
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
// import { MdOutlineSearch } from "react-icons/md";
// import { FaHouse } from "react-icons/fa6";
// import { PiTelevisionSimpleFill } from "react-icons/pi";
// import { IoStorefrontOutline } from "react-icons/io5";
// import { FaUsers } from "react-icons/fa";
// import { FaThList } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
// import { FaBell } from "react-icons/fa";

import { FaSearch } from 'react-icons/fa'
import { IoMdHome, IoMdPeople } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { CgMenuGridR } from "react-icons/cg";
import { TbBellFilled } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { CiShop } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { RiFeedbackFill } from "react-icons/ri";
import { GrLogout } from "react-icons/gr";
import { handlesigntolog } from "./Store/Slice";
import { Posts } from "./Posts";
export const Header=()=>{
    let icon1= [<CgMenuGridR />, <FaFacebookMessenger />, < TbBellFilled />]
    let icon2= [<IoMdPeople />,<FaFacebookMessenger />,<RiComputerLine/>, < TbBellFilled />,<CiShop/>]
    let logout=[
        {
        icon: <IoSettings  className="logouticon"/>,
        name:"Settings & Privacy",
        id:1
    },
    {
        icon:<RiFeedbackFill  className="logouticon"/>,
        name:"Give Feed back",
        id:2
    },
    {
        name:"Log Out",
        icon:<GrLogout  className="logouticon"/>,
        id:3
    }]
    let State=useSelector((abi)=>abi)
    let dispatch=useDispatch()
    let a=useNavigate()
    let [view,setview]=useState(false)

    let viewmore=()=>{
        setview(!view)
    }
    let out=(id)=>{
        if(id===3){
            dispatch(handlesigntolog(true))
            a('/login')
        }
    }
    return <section id='facebook'>
                <section className="lnavsection">
                    <div className="lnavcontainer">
                        <div className="lnavrow">
                            <div className="lnavcol1">
                                <div className="logo">
                                    <img src="https://images.hindustantimes.com/tech/img/2023/09/21/960x540/fb_1695273515215_1695273522698.jpg" alt="pic"/>
                                </div>
                                <div className="search">
                                    <input type="text" placeholder="Search Facebook" />
                                    <FaSearch id="search" />
                                </div>

                            </div>
                            <div className="lnavcol2">
                                <div >
                                    < IoMdHome className="selecthome" />
                                    <div className="select"></div>
                                </div>
                                <div><IoMdPeople /></div>
                                <div><HiUserGroup /></div>

                            </div>
                            <div className="lnavcol3">
                                <div className="frd">
                                    Find friends
                                </div>
                                {
                                    icon2.map((e, i) => {
                                        return <div key={i} className="navicons">{e}</div>
                                    })
                                }
                                <div className="dp" onClick={viewmore}>
                                    <img src="https://dp-pic.com/wp-content/uploads/2024/01/A-Cute-Baby-Playing-on-Bed-Cute-Dp-by-DP-Pic-1.jpg" alt="pic"/>
                                </div>

                            </div>


                        </div>

                    </div>

                </section>

                <section className="mnavsec">
                    <div className="mnavcontainer">
                        <div className="mnavrow1">
                                <div className="logo">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PzLcatn2DfuEWKy29cqsa3J_5kjDQLpnBbwWOZM0642eMYzwfQ8ZbCttPsmXb2DOUz4&usqp=CAU" alt="pic"/>
                                </div>
                                <div className="msearch">
                                    {/* <input type="text" placeholder="Search Facebook" /> */}
                                    <FaSearch/>
                                </div>
                                <div className="msearch" onClick={viewmore}>
                                    <IoMenu />
                                </div>
                        </div>

                    </div>
                    <div className="mnavrow2">
                        <div className="micons" id='home' ><IoMdHome /></div>
                        {
                            icon1.map((e,i)=>{
                                return <div key={i} className="micons">{e}</div>
                            })
                        }

                    </div>

                </section>
                {view? <section className='logoutsec'>
                    <div className='logoutcon'>
                        <div className='logoutrow1'>
                            <div className="profile">
                                <img src="https://dp-pic.com/wp-content/uploads/2024/01/A-Cute-Baby-Playing-on-Bed-Cute-Dp-by-DP-Pic-1.jpg" alt="pic"/>

                            </div>
                            <div className="proname">
                            <p>{State.data.profile}</p>
                            <p className="view">View Profile</p>
                            </div>
                        </div>
                        <div className="logoutrow2">
                            {
                                State.data.arr.map((e,i)=>{
                                    return  <div className="others" key={i}>
                                        <div className="profile">
                                            <img src={e.url} alt="profile"/>
                                        </div>
                                        <p>{e.name}</p>
                                    </div>
                                })
                            }

                        </div>
                        <div className="logoutrow3">
                            {
                                logout.map((e,i)=>{
                                    return <div className="logout" onClick={()=>out(e.id)} key={i}>
                                        <div>{e.icon}</div>
                                        <p>{e.name}</p>
                                    </div>
                                })

                            }
                        </div>

                    </div>

                </section>:''}
       
       <Posts/>
    </section>
}

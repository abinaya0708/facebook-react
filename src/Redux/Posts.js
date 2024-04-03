import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosArrowDown } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { IoIosImages } from "react-icons/io";
import { MdOutlineSentimentSatisfiedAlt } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { GoComment } from "react-icons/go";
// import { CiGlobe } from "react-icons/ci";
import { FaGlobeAsia } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import {  handledefaultpost, handleid } from './Store/Slice';
import { useNavigate } from 'react-router-dom';
import "./Posts.scss"
export const Posts = () => {
    let state = useSelector((abi) => abi)
    let dispatch = useDispatch()
    let a=useNavigate()
    var [caption, setcaption] = useState('')
    var [comm,setcomm]=useState('')
    var inputRef=useRef(null)
    const imagepost=()=>{
        console.log('hello');
        inputRef.current.click()

    }
    let posticon = [
        {
            name: "Live Video",
            icon: <FaVideo />,
            idname: "pvideo",
            id: 1
        },
        {
            name: "Photo/Video",
            icon: <IoIosImages/>,
            idname: "pimage",
            id: 2

        },
        {
            icon: <MdOutlineSentimentSatisfiedAlt />,
            name: "Feeling/activity",
            idname: "emoji",
            id: 3

        }
    ]
    let comment = (id) => {
        let x = state.data.defaultpost.map((e) => {
            return id === e.id ? { ...e, comboo: !e.comboo } : e
        })
        dispatch(handledefaultpost(x))
    }

    let goto=(id)=>{ 
        if(id===2){
            a('/post')
       console.log('update');}
    }
    // console.log(state.data.create)
    var like = ['Akalya, Priya, Preetha and ', 'Adlin , Lavanya, Malathi and ', 'Alexsha, Ananth, Pavan and ', 'Praveen, Pavith, Renuga and']
    var likecount = [31, 44, 7, 86, 77, 23]
    var file
    let handle = (e) => {
        console.log(Math.random() * like.length);
       var id = state.data.id
        console.log(e.target.files[0]);
        file = e.target.files[0]
        var post = {
            name: state.data.profile,
            id: id,
            dpurl:"https://dp-pic.com/wp-content/uploads/2024/01/A-Cute-Baby-Playing-on-Bed-Cute-Dp-by-DP-Pic-1.jpg",
            url: file,
            like: like[Math.floor(Math.random() * like.length)],
            likecount: likecount[Math.floor(Math.random() * likecount.length)],
            boo: false,
            caption: caption,
            comboo: false,
            deleteboo:false,
            day: "Just Now",
            comment:[]
        }
        let x = state.data.defaultpost.map((e) => {
            return e
        })
        x.push(post)
        dispatch(handledefaultpost(x))
        setcaption('')
        dispatch(handleid((state.data.id)+1))
    }
    let handlecap = (e) => {
        if (e.target.name==='cap') {
            setcaption(e.target.value)
        }
        else   if (e.target.name==='comm') {
            setcomm(e.target.value)
        }
    }
    let liking = (id) => {
        let x = state.data.defaultpost.map((e) => {
            return id === e.id ? { ...e, boo: !e.boo } : e
        })
        dispatch(handledefaultpost(x))
    }
    let commpost=(id)=>{
       let y={
            "name":state.data.profile,
            "path":"https://beingselfish.in/wp-content/uploads/2023/09/cat-dp40.jpg",
            "com":comm
        }
        console.log(y);
        let x = state.data.defaultpost.map((e) => {
            return id===e.id ? { ...e, comment:[...e.comment,y]} : e
        })
        console.log(x);
        dispatch(handledefaultpost(x))
        setcomm('')
    }
    let del=(id)=>{
        let x = state.data.defaultpost.map((e) => {
            return id===e.id ? { ...e,deleteboo:true} : e
        })
        dispatch(handledefaultpost(x))
    }
    let savedel=(id)=>{
        let x = state.data.defaultpost.map((e) => {
            return id===e.id ? { ...e,select:!e.select} : e
        })
        dispatch(handledefaultpost(x))
    }
    let save=(id)=>{
        let x = state.data.defaultpost.map((e) => {
            return id===e.id ? {...e,select:!e.select,save:!e.save} : e
        })
        dispatch(handledefaultpost(x))
    }
    return <section id='homesec'>
        <section className='home1sec'>
            <div className='home1con'>
                <div className='home1row'>

                    <div className='home1col'>
                        <div className="home1img">
                            <img src="https://dp-pic.com/wp-content/uploads/2024/01/A-Cute-Baby-Playing-on-Bed-Cute-Dp-by-DP-Pic-1.jpg" alt="pic" />
                        </div>
                        <p>{state.data.profile}</p>
                    </div>
                    {
                        state.data.arr.map((e, i) => {
                            return <div className='home1col' key={i}>
                                <div className='home1img'><img src={e.url} alt="pic"/></div>
                                <p>{e.name}</p>
                            </div>
                        })
                    }
                    <div className='home1col'>
                        <div className='home1img'>
                            <IoIosArrowDown id='downicon' />
                        </div>
                        <p>See More</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='post'>
            <div className='postcon'>
                <div className='postrow1'>
                    <div className='home1col'>
                        <div className="home1imgg">
                            <img src="https://dp-pic.com/wp-content/uploads/2024/01/A-Cute-Baby-Playing-on-Bed-Cute-Dp-by-DP-Pic-1.jpg" alt="pic"/>
                        </div>
                        <input type='text' onChange={handlecap} name='cap' value={caption} id='input' placeholder={`whats on your mind, ${state.data.profile}?`} />
                        <div id='pimage'>
                            <div onClick={imagepost}><IoIosImages className='file' />
                                <input type='file' className='fileinput' ref={inputRef} name='file' onChange={handle} />
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='postvie'>
                        {
                            posticon.map((e, i) => {
                                return <div id={e.idname} className='picon' key={i}>
                                    <div onClick={()=>goto(e.id)}>{e.icon} </div>
                                    <p>{e.name}</p>
                                </div>

                            })
                        }
                    </div>
                </div>
                <div className='postrow2'>
                    {
                        state.data.defaultpost.map((e, i) => {
                            return !e.deleteboo?<div className='postrow2col' key={i}>
                                <div className='postrow2col-1'>
                                    <div className='postdp'>
                                        <div className='postdpimg'>
                                            <img src={e.dpurl} alt="postdp"/>
                                        </div>
                                        <div>
                                            <h4 className='username'>{e.name}</h4>
                                            <p className='useruse'>{e.day}.<FaGlobeAsia/></p>
                                        </div>
                                    </div>
                                    <div className='postmenu'>
                                        <div className='postmenu-icons'>
                                            <CiMenuKebab className='menuicon' onClick={()=>savedel(e.id)}/>
                                        </div>
                                        <div className='postmenu-icons'>
                                            <RxCross2 className='menuicon' />
                                        </div>

                                    </div>
                                    {
                                        e.select?!e.save?<div className='savedel'>
                                        <p onClick={()=>save(e.id)} className='save-icon'> Save </p>
                                        <p onClick={()=>{del(e.id)}} className='save-icon'> Delete </p>
                                        </div>:<div className='savedel'>
                                        <p onClick={()=>save(e.id)} className='save-icon'> Unsave </p>
                                        <p onClick={()=>{del(e.id)}} className='save-icon'> Delete </p>
                                        </div>:""
                                    }

                                </div>
                                <p className='cap'>{e.caption}</p>
                                {
                                    e.url ? e.url.type === 'video/mp4' || e.url.type === 'video/mp3' || e.url.type === 'video/mov' ?
                                        <div className='postimage'>
                                            <video controls className='imgvid'>
                                                <source src={URL.createObjectURL(e.url)} type="video/mp3" />
                                                <source src={URL.createObjectURL(e.url)} type="video/mp4" />
                                                <source src={URL.createObjectURL(e.url)} type="video/mov" />
                                            </video>
                                        </div> :
                                        <div className='postimage'><img className='imgvid' src={URL.createObjectURL(e.url)} alt="pic"/></div>
                                        : <div className='postimage'>
                                            <img className='imgvid' src={e.imgurl} alt="pic"/>
                                        </div>
                                }
                                <div className='likecomment'>
                                    {e.boo ? <p className='comlike'><BiSolidLike style={{ color: "blue" }} /> Liked by {e.like} {e.likecount + 1} Others</p> : <p className='comlike'><BiSolidLike style={{ color: "blue" }} /> Liked by {e.like} {e.likecount} Others</p>}
                                    <p className='likecom'>{e.comment.length} comment</p>
                                </div>
                                <hr></hr>
                                
                                    <div className='like-row'>
                                        <div className='like-col'>
                                            {e.boo ? <BiSolidLike className="blue-likeicon"  onClick={() => liking(e.id)} /> : <BiLike className="like-icons" onClick={() => liking(e.id)} />}
                                            <p>Like</p>
                            
                                        </div>
                                        <div className='like-col'>
                                            <GoComment className="like-icons"/>
                                            <p onClick={() => comment(e.id)}   style={{cursor:"pointer"}}>Comment</p>
                                        </div>
                                        <div className='like-col'>
                                            <RiShareForwardLine  className="like-icons" style={{cursor:"pointer"}}/>
                                            <p>Share</p>
                                        </div>
                                    </div>
                                
                                <hr></hr>
                                <div>
                                    {e.comboo ?
                                        e.comment.map((a) => {
                                            return <div className='postdp com'>
                                                <div className='postdpimg'><img src={a.path} alt="pic"/></div>
                                                <div>
                                                    <p className='username'>{a.name}</p>
                                                    <p className='useruse'>{a.com}</p>
                                                </div>
                                            </div>
                                        }) : ""
                                    }
                                </div>
                                <hr></hr>
                                <div className='home1col'>
                                    <div className="home1img">
                                        <img src="https://dp-pic.com/wp-content/uploads/2024/01/A-Cute-Baby-Playing-on-Bed-Cute-Dp-by-DP-Pic-1.jpg" alt="pic"/>
                                    </div>
                                    <input type='text' onChange={handlecap} name='comm' value={comm} id='input' placeholder={`${state.data.profile} Comment your opinion`} />
                                    {/* <div id='pimage'>  <div><IoIosImages className='file' /><input type='file' name='file' onChange={handle} /></div></div> */}
                                </div>
                                <p onClick={()=>commpost(e.id)} className="post-icon">post</p>

                            </div>:''
                        })
                    }
                </div>
            </div>
        </section>

        <section id='contact'>
            <div className='constactcon'>
                <div className='contactrow1'>
                    <h2>Contact</h2>
                    <p>See All</p>
                </div>
                <div className='home1row'>
                    {
                        state.data.frd.map((e, i) => {
                            return <div className='home1col frd' key={i}>
                                <div className='home1img'><img src={e.url} alt="pic" /></div>
                                {e.boo ? <div className='online'></div> : ''}
                                <p>{e.name}</p>
                            </div>
                        })
                    }

                </div>
            </div>

        </section>


    </section>
}

import React from 'react'
import Navbar from './Navbar'

const Banner = (props) => {
  return (
    <>
    <style jsx>
        {`
            .main{
                width:100vw;
                height:70vh;
                background:url("http://m.gettywallpapers.com/wp-content/uploads/2021/09/Money-Heist-Laptop-Wallpaper-4k.jpg");
                background-size:cover;
            }
            .bannerinsiders{
                height: 50vh;
                padding:50px;
                width: max-content;
            }
            .bannerinsiders p{
                width:30vw;
            }
            .bannerinsiders h1{
                margin:15vh 0px 20px 0;
                font-size:3em;
                width:10vw;
                text-transform:uppercase;
            }
            button{
                padding:10px 20px;
                margin: 0 20px 0 0;
                font-size:18px;
                background:#ffffff50;
                backdrop-filter:blur(20px);
                border:none;
            }
        `}
    </style>
    <div className="main">
        <Navbar tabname={props.tab}/>
        <div className="bannerinsiders">
            <h1>Money Heist</h1>
            <div className="btn">
                <button>Play</button><button>My List</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum nesciunt rem quisquam iste?</p>
        </div>
    </div>
    </>
  )
}

export default Banner
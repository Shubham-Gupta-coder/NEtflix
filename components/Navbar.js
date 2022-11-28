import Link from 'next/link'
import React, {useState} from 'react'

const Navbar = (props) => {
    const [display, setDisplay] = useState("none")

  return (
    <>
    <style jsx>
        {`
            .left,.right{
                display:flex;
                align-items:center;
                justify-content:space-around;

                transition:all 0.5s ease;
            }
            ul{
                display:flex;
                align-items:center;
                justify-content:center;
                
                transition:all 0.5s ease;
            }
            li{
                color:gray;
                list-style:none;
                margin:0px 5px;
            }
            li:hover{
                color:#ddd;
            }
            header{
                display:flex;
                align-items:center;
                justify-content:space-around;
                background:linear-gradient(180deg, #000, #000000);
                position:fixed;
                width:100vw;
                transition:all 0.5s ease;
            }
            #${props.tabname}{
                color:white;
            }
            svg{
                display:none;
            }
            @media  screen and (max-width: 868px){
                h1{
                    display:flex;
                    align-items:center;
                    justify-content:space-around;
                    width:80vw;
                }
                ul{
                    display:${display};
                    flex-wrap:wrap;
                    
                }
                svg{
                    display:block;
                }
                .right{
                    width:max-content;
                }
                header{
                    justify-content:space-around;
                    flex-direction:column;
                }
                .left{
                    flex-direction:column;
                }
            }
        `}
    </style>
    <header>
    <div className="left">
        <h1 className="logo">
            <img src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" width={120} alt="" />
            <svg onClick={()=>{
                 if (display == "flex") {
                    setDisplay("none")
                 } else {
                    setDisplay("flex")
                 }
                }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
        </h1>

        
        <nav>
            <ul>
                <li id='home'><Link href="/">Home</Link></li>
                <li id='tvshows'><Link href="/tvshows">TV Shows</Link></li>
                <li id='movies'><Link href='/movies'>Movies</Link></li>
                <li id='recentlyadded'>
                   <Link href="recentlyadded"> Recently Added</Link>
                    </li>
                <li id='mylists'>My List</li>
            </ul>
        </nav>
        
    </div>
    <div className="right">
        {/* WE'LL add icons IT LATER */}
        <ul>
            <li>SEARCH</li>
            <li>KIDS</li>
            <li>DVD</li>
        </ul>
    </div>
    </header>
    </>
  )
}

export default Navbar
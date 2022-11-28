import React from 'react'
// {"first":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBZbUCiWlHjpibUPyaq8j6RCLTg8QhZliww&usqp=CAU","second":"https://i.ytimg.com/vi/BmllggGO4pM/maxresdefault.jpg","third":"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Harry-Potter-goblet-of-fire.jpg","fourth":"https://i.ytimg.com/vi/48fKIXlxaXk/maxresdefault.jpg","fifth":"https://images.indianexpress.com/2021/09/RRR-1200.jpg","sixth":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMLdvHLrkCI7UdSuMnJY2EvanxQ5dwuevNsN-Uc0W8B4Q4qH9d_TT5rgsBI2ycynWCVk&usqp=CAU","seventh":"https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg"}


const MoviesSec = (props) => {
  return (
    <>
    {/* HOver effect will be add later */}
        <style jsx>
            {`
                .card img{
                    width:320px;
                    hiehgt:180px;
                    margin: 5px;
                
                }
                .card{
                    display:flex;
                    max-width:100vw;
                    overflow-x:auto;
                }
                h3{
                    margin:10px 50px;
                }
            `}
        </style>
        <div className="main">
            <h3>{props.title}</h3>
            <div className="movies">
                <div className="card">
                    {/* Assume that these are coming from an api */}
                    {/* We might create such api later */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBZbUCiWlHjpibUPyaq8j6RCLTg8QhZliww&usqp=CAU" alt="" />
                    <img src="https://i.ytimg.com/vi/BmllggGO4pM/maxresdefault.jpg" alt="" />
                    <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Harry-Potter-goblet-of-fire.jpg" alt="" />
                    <img src="https://i.ytimg.com/vi/48fKIXlxaXk/maxresdefault.jpg" alt="" />
                    <img src="https://images.indianexpress.com/2021/09/RRR-1200.jpg" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMLdvHLrkCI7UdSuMnJY2EvanxQ5dwuevNsN-Uc0W8B4Q4qH9d_TT5rgsBI2ycynWCVk&usqp=CAU" alt="" />
                    <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg" alt="" />
                    <img src="https://m.economictimes.com/thumb/msid-94054821,width-1280,height-720,resizemode-4,imgsize-132496/boycott-brahmastra-alia-bhatt-ranbir-kapoor-starrer-next-target-after-amir-khans-lal-singh-chaddha.jpg" alt="" />
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default MoviesSec
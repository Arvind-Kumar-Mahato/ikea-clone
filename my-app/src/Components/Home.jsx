import React from "react"
import "./Home.css"
import { Product } from "./Product"
import { Navbar } from "./Navbar"
export const Storage=()=>{
    return(
        <>
        <Navbar/>
        <h1 className="tv">TV & media furniture</h1>
        <div clasName = "media">

       
        <img className = "img"src = "https://www.ikea.com/global/assets/navigation/images/tv-benches-10810.jpeg?imwidth=500"/>
       
        <img className = "img"src = "https://www.ikea.com/global/assets/navigation/images/tv-media-storage-14885.jpeg?imwidth=500"/>
        </div>
        <div className="text_link">
        <h5 className = "text">TV stands & benches</h5>
        <h5 className="text">TV & media storage</h5>
        </div>
        <div className= "tv_info">
            <p>We’ve come a long way from black-and-white TV units to games, on-demand movies and 3D. One thing hasn’t changed – needing a stand or cabinet for the TV unit. Our selection helps cut the clutter, manage cables and get things prettied up. So you can relax and enjoy your TV, even when it isn’t on.</p>
        </div> 
        <h1 className="tv">Fun ways to style your TV area</h1>
        <div className= "tv_info">
            <p>With a sleek and modern TV storage combination in a neutral color, it’s easy to style a room with colors and patterns that you like. A tip: make a colorful art wall with your favorite prints for a show-stopping media corner.</p>
        </div> 

        <div clasName = "media_floor">

       
<img className = "wall_tv"src = "https://www.ikea.com/ext/ingkadam/m/4d0afb9adc79a3dd/original/PH178084-crop001.jpg?f=m"/>

<img className = "wall_tv"src = "https://www.ikea.com/ext/ingkadam/m/617073edfa962bd1/original/PH183023-crop001.jpg?f=m"/>
</div>



<div clasName = "media-tool">

      
       <img className="box" src= "https://www.ikea.com/us/en/images/products/kallax-lack-storage-combination-with-shelf-white__0956117_pe804530_s5.jpg?f=xxxs">
     
       
       </img>
       
        <img className = "box"src = "https://www.ikea.com/images/the-besta-storage-system-f3e72ca02959bb40043a9ce2fa597780.jpg?f=m"/>
        </div>
        <Product/>
    </>
    )
}
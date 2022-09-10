import react from "react"
import ReactPlayer from "react-player"
import "./index.css"
import  ReactDOM from "react-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
ReactDOM.render(<><div className="nav">
      <img  width="200" height="60" src="//cdn.shopify.com/s/files/1/2980/5140/files/logo_74e18815-13ce-4a65-af24-e6423617547d_140x@2x.png?v=1626932326" alt="LOOM SOLAR"/>
      <input placeholder="   Search..." style={{width: "500px" ,height:"45px"}}></input>
      <button type="submit" class="search-bar__submit" aria-label="Search"><SearchIcon/></button>
      <div className="cart">
      <ShoppingCartOutlinedIcon sx={{ fontSize: "40px" }}/>
                  </div><span className="text"><b>Cart</b></span></div>
<b><h1>Short Videos</h1></b><div className="player-wrapper">
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/RBoxgkzIkEQ" width={250} height={300} ></ReactPlayer></div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/Nq0csOeOz3c" width={250} height={300}></ReactPlayer>
</div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/-CGfJcPrNEQ" width={250} height={300}></ReactPlayer>
</div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/CEGjxH0lKGI"width={250} height={300} ></ReactPlayer>
</div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/mP34aKNgSKk"width={250} height={300} ></ReactPlayer>
</div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/WNNVGWRUOSA" width={250} height={300}></ReactPlayer></div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/ksEf6ep7rvw" width={250} height={300}></ReactPlayer></div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/jAEzBt2cXxg" width={250} height={300}></ReactPlayer></div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/4gBy9QHzIkU" width={250} height={300}></ReactPlayer></div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/MovMaLYWiAc" width={250} height={300}></ReactPlayer></div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/4-WB7kSAjro" width={250} height={300}></ReactPlayer></div>
<div className="react-player">
<ReactPlayer controls url="https://youtu.be/TGAXkDahk4E" width={250} height={300}></ReactPlayer></div>
</div>
</>
,document.getElementById('root'));
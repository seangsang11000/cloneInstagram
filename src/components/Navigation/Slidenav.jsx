import "../Navigation/Slidenav.css"

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import MenuIcon from "@mui/icons-material/Menu";


const Slidenav = () => {
  return (
    <div className="slidenav">
      <img
        className="slide_logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className="slidenav_buttons">
        <button className="slidenav_button">
          <HomeIcon />
          <span>Home</span>
        </button>

        <button className="slidenav_button">
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className="slidenav_button">
          <ExploreIcon />
          <span>Explore</span>
        </button>

        <button className="slidenav_button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>

        <button className="slidenav_button">
          <ChatIcon />
          <span>Messages</span>
        </button>

        <button className="slidenav_button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>

        <button className="slidenav_button">
          <AddBoxIcon />
          <span>Create</span>
        </button>

        <button className="slidenav_button">
          <InsertChartIcon />
          <span>Dashboard</span>
        </button>
      </div>
      <div className="slide_more">
        <button className="slidenav_button">
          <MenuIcon/>
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Slidenav
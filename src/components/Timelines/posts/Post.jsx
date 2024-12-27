import { MoreHorizOutlined } from '@mui/icons-material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcons from "@mui/icons-material/Telegram";
import ConmmentIcons from "@mui/icons-material/ChatBubbleOutline";
import SaveIcons from "@mui/icons-material/Bookmark";
import { Avatar } from '@mui/material';
import { use } from 'react';
import "./Post.css"


const Post = ({user,postImage,likes,timeram}) => {
  return (
    <div className="post">
      <div className="post_header">
        <div className="post_headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user}. <span>{timeram}</span>
        </div>
        <MoreHorizOutlined />
      </div>
      <div className="post_image">
        <img
          src={postImage}
          alt="postImage"
        />
      </div>
      <div className="post_footer">
        <div className="post_footerIcons">
          <div className="post_iconsMain">
            <FavoriteBorderIcon className="postIcons" />
            <ConmmentIcons className="postIcons" />
            <ShareIcons className="postIcons" />
          </div>
          <div className="post_iconsSave">
            <SaveIcons className="postIcons" />
          </div>
        </div>
       {likes} likes
      </div>
    </div>
  );
}

export default Post
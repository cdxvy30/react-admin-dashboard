import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            {/* <div className="counter">1</div> */}
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            {/* <div className="counter">2</div> */}
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img 
              src="https://lzd-img-global.slatic.net/g/p/aa9aee7a3f175f0d76ae2563790feecf.jpg_720x720q80.jpg_.webp"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

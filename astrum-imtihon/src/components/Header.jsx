import "./header.css"
import { CiSearch } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { BiSolidBellRing } from "react-icons/bi";
import { FcLike } from "react-icons/fc";




const Header = () => {
  return (
    <div className="header">
      <h1>Morent</h1>
      <div className="search-panel">
        <CiSearch />
        <input type="text" placeholder="Search something here" />
      </div>
      <div className="btn-group">
        <button>
            <IoIosSettings />
        </button>
        <button>
            <BiSolidBellRing />
        </button>
        <button>
            <FcLike />
        </button>
        <img  src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg" alt=""  width={70}/>
      </div>
    </div>
  )
}

export default Header

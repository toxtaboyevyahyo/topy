import { link } from "../components/link";
import "./mainlink.css"
import rasm from "../assets/53.png"
import rasms from "../assets/free.png";
import check from "../assets/checkout.webp"

const MainLink = () => {
  return (
    <div className="main-link">
      <div className="main-box">
        {link.map((title, index) => (
          <div key={index} className="flex">
            <div className="black1">
              <div className="box">
                <div className="image">
                  <img src={check} alt="check" width={20} height={20} />
                </div>
                <div className="url">
                  <h1 className="main-title">{title.up}</h1>
                </div>
              </div>
              <h3 className="main-subtitle loc">{title.location}</h3>
              <div className="box">
                <div className="url">
                  <p className="main-text">{title.select}</p>
                </div>
                <div className="image">
                  <img src={rasms} alt="rasm" width={30} height={30} />
                </div>
              </div>
            </div>
            <span></span>

            <div className="black">
              <h1 className="main-title  taym">{title.taym}</h1>
              <div className="box">
                <div className="url">
                  <p className="main-text">{title.youDate}</p>
                </div>
                <div className="image">
                  <img src={rasms} alt="rasm" width={30} height={30} />
                </div>
              </div>
            </div>
            <span className="span"></span>
            <div className="black">
              <h1 className="main-title taym">{title.time}</h1>
              <div className="box">
                <div className="url">
                  <p className="main-text">{title.youtime}</p>
                </div>
                <div className="image">
                  <img src={rasms} alt="rasm" width={30} height={30} />
                </div>
              </div>
            </div>
            <button className="main-button">
              <img className="main-img" src={rasm} alt="rasm" />
            </button>

            <div className="black">
              <h1 className="main-title ">{title.drop}</h1>
              <h3 className="main-subtitle loc">{title.location}</h3>
              <div className="box">
                <div className="url">
                  <p className="main-text">{title.select}</p>
                </div>
                <div className="image">
                  <img src={rasms} alt="rasm" width={30} height={30} />
                </div>
              </div>
            </div>
            <span className="span"></span>
            <div className="black">
              <h1 className="main-title taym">{title.taym}</h1>
              <div className="box">
                <div className="url">
                  <p className="main-text">{title.youDate}</p>
                </div>
                <div className="image">
                  <img src={rasms} alt="rasm" width={30} height={30} />
                </div>
              </div>
            </div>
            <span className="span"></span>
            <div className="black">
              <h1 className="main-title taym">{title.time}</h1>
              <div className="box">
                <div className="url">
                  <p className="main-text">{title.youtime}</p>
                </div>
                <div className="image">
                  <img src={rasms} alt="rasm" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainLink;
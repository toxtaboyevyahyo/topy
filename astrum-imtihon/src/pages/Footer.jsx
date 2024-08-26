import { more } from "../components/more"
import "./footer.css"

const Footer = () => {
  return (
    <div>
      {more.map((value, index) => {
        return (
            <div key={index}>
                <div className="footer">
                    <div className="footer-item">
                      <h1>{value.morent}</h1>
                      <p>{value.our}</p>
                    </div>
                    <div className="footer-box">
                      <div className="footer-list">
                        <h2>{value.about}</h2>
                        <h3>{value.how}</h3>
                        <h3>{value.ured}</h3>
                        <h3>{value.ship}</h3>
                        <h3>{value.buss}</h3>
                      </div>
                      <div className="footer-list">
                        <h2>{value.socials}</h2>
                        <h3>{value.cord}</h3>
                        <h3>{value.gram}</h3>
                        <h3>{value.ter}</h3>
                        <h3>{value.book}</h3>
                      </div>
                      <div className="footer-list">
                        <h2>{value.unity}</h2>
                        <h3>{value.ev}</h3>
                        <h3>{value.log}</h3>
                        <h3>{value.cast}</h3>
                        <h3>{value.friend}</h3>
                      </div>
                    </div>
                    
                </div>
                <span className="sp"></span>
                <div className="footer-flex">
                  <div>
                    <span className="vh">{value.policry}</span>
                    <span className="vh">{value.terms}</span>
                  </div>
                  <div>
                    <h3>{value.all}</h3>
                  </div>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Footer

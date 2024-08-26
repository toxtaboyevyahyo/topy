import "./main.css"
import MainLink from "./MainLink"
import PopularCar from "./PopularCar"
import {SliderData} from "../../src/components/data"




const Main = () => {
  return (
    <div className="main">
      <div className="online-car">
        {
          SliderData.map((item, index) =>{
            return (
              <div key = {index} className='car'>
                  <div>
                    <h1 className="title">{item.title}</h1>
                    <p className="online-text">{item.content}</p>
                  </div>
                  <button className="button">Rental Car</button>
                  <img className="img" src={item.url} alt={item.title} width={200} />
              </div>
            )
          })
        }
      </div>



      <MainLink/>
      <PopularCar/>
    </div>
  )
}

export default Main

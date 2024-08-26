import { Link } from "react-router-dom";
import { car } from "../components/car";
import "./popular.css"
const PopularCar = () => {
    return (
        <div>
            <div className="popular-admin  ">
                {car.map((events,) => {
                    return (
                        <div key={events.id}   className="popular ">
                            <h1 className="p-title">{events.kon}</h1>
                            <p className="p-text">{events.sport}</p>
                            <img src={events.image} alt="rasm" width={200} height={100} />
                            <div className="pupular-box">
                                <span>{events.num}</span>
                                <span>{events.manuel}</span>
                                <span>{events.peop}</span>
                            </div>
                            <div className="popular-flex">
                                <div className="items">
                                    <h4>{events.inNum}</h4>
                                </div>
                                <div className="butt">
                              <Link to={"cars"}>  <button className="btn-submit">{events.rent}</button></Link>
                                </div>
                            </div>
                            
                        </div>
                        
                    )
                })}
                <button className="button">Show More Car</button>
            </div>
        </div>
    )
}

export default PopularCar

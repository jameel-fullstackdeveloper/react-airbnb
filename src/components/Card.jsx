import profilepic from "../images/katie-zaferes.png"
import star from "../images/star.png"

function Card (props) {
    console.log(props.img)
    return (
       
        <div className="card">
            <img src={profilepic} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •  </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;
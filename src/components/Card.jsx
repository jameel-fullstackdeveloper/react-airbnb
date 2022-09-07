
import cardpic from "../images/cardpic.png"
import starpic from "../images/star.png"

function Card  () {

    return (
        <div className="card">
            <img src={cardpic} className="card--image" />
            <div className="card--stats">
                <img src={starpic} className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
    </div>
    )
}

export default Card;
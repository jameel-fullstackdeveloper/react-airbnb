import heropic from "../images/hero.png"

function Hero () {
    return (
        <section className="hero">
            <img src={heropic} alt="logo" className="hero-pic" />
            <h1 className="hero-heading">Online Experiences</h1>
            <p className="hero-info">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;
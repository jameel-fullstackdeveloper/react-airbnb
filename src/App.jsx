import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"



function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        
        <Card img="../images/katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
       
       <Card 
                img="../images/katie-zaferes.png"
                rating="5.0"
                reviewCount={30}
                country="USA"
                title="Learn wedding photography"
                price={125}
            />
       

       <Card 
                img="../images/katie-zaferes.png"
                rating="4.8"
                reviewCount={2}
                country="USA"
                title="Group Mountain Biking"
                price={50}
            />

`       
       
       
    </div>
  )
}

export default App

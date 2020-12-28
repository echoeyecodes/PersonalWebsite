import React, { ReactNode } from "react"
import '../assets/css/home.css'
import Hero from "./hero"

interface Props {
  children: ReactNode
}

function Home(props:Props){

  return (
    <section className="home">
        <Hero />
    </section>
  )
}

export default Home

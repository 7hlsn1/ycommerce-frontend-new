import React from "react"
import Container from "../../components/Container"
import Carousel from "../../components/Carousel"
import Destaques from "../../components/Destaques"
export default function Home() {
    return (
        <Container>
            <div className="grid-container" style={{ marginTop: '4em' }}>
                <div className="carousel-wrapper">
                    <Carousel />
                </div>

            </div>
            <Destaques />
            <Destaques title='Você pode gostar'/>
        </Container>
    )
}
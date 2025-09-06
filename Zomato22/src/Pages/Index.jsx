import { Header } from "../Component/header"
import { CarouselComponent } from "../Component/Carousel"
import { Footer } from "../Component/footer"



export function Home(){
    return(
        <>
          <Header/>
          <CarouselComponent/>
          <Footer/>
        </>
    )
}
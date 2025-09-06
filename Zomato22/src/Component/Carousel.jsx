

export function CarouselComponent() {
    return (
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="public/image/slider-1.jpg" className="d-block w-100" alt="slider-1" height="600"/>
                    </div>
                    <div className="carousel-item">
                        <img src="public/image/slider-2.jpg" className="d-block w-100" alt="..." height="600"/>
                    </div>
                    <div className="carousel-item">
                        <img src="public/image/slider-3.jpg" className="d-block w-100" alt="..." height="600"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}
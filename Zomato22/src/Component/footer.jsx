

export function Footer() {
    return (
        <footer>
            <div className="row container-fluid">
                <div className="col">
                    <h2>Flipkart</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam perspiciatis dolorem a provident velit dolore consequuntur rerum sed quaerat minima, minus nihil, quis ullam est quas obcaecati, aliquid nostrum nesciunt.</p>
                </div>
                <div className="col">
                    <h3>Pages</h3>
                    <ul>
                        <li>About</li>
                        <li>ContactUs</li>
                        <li>Bloog</li>
                        <li>ContactUs</li>
                    </ul>
                </div>

                <aside className="col">
                    <div>
                        <h2>Social</h2>
                        <ul>
                            <li className="bi bi-facebook m-3"> facebook</li>
                            <li className="bi bi-linkedin m-3"> Linkedin</li>
                            <li className="bi bi-twitter-x m-3"> Twitter</li>
                            <li className="bi bi-instagram m-3"> Instagram</li>
                        </ul>
                    </div>
                </aside>


                <address className="col">
                    <h2>Address</h2>
                    <ul>
                        <li><a href="mail:to jkri0206@gmail.com"> <span className="bi bi-envelope m-2"></span>Email</a></li>
                        <li><a href="https://web.whatsapp.com/"> <span className="bi bi-whatsapp m-2"></span> Whatsapp</a></li>
                        <li><a href="https://www.map.google.com"> <span className="bi bi-geo-alt"></span>Hyderabad</a></li>

                    </ul>
                </address>
            </div>
            <div className="bg-dark">
                <p className="text-center text-white">Copyright || 2025</p>
            </div>


        </footer>
    )
}
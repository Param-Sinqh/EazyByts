import React, { useRef } from 'react';
import './css/Home.css';
import chef1 from '../images/chefs/chefs-1.jpg';
import chef2 from '../images/chefs/chefs-2.jpg';
import chef3 from '../images/chefs/chefs-3.jpg';
import dish1 from '../images/menu/menu-item-1.png';
import dish2 from '../images/menu/menu-item-2.png';
import dish3 from '../images/menu/menu-item-3.png';

const Home = () => {
    const aboutRef = useRef(null);
    const chefsRef = useRef(null);
    const menuRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home">

            <section className="hero">
                <h1>Welcome to QuickServe</h1>
                <p>Your favorite food, delivered fast.</p>
                <button onClick={() => scrollToSection(aboutRef)}>Learn More</button>
            </section>

            <section id='about' className="about" ref={aboutRef}>
                <img src='https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?cs=srgb&dl=pexels-reneterp-1581384.jpg&fm=jpg'></img>

                <div className="section-content">
                <h2 className="section-title">About Us</h2>
                        <p>
                            Welcome to <strong>QuickServe</strong>, where culinary excellence meets warm hospitality.
                            Our story is one of <em>passion</em>, <em>dedication</em>, and a commitment to delivering an
                            exceptional dining experience to our cherished guests.
                        </p>
                        <p>
                            At <strong>QuickServe</strong>, we believe that food is more than sustenance; it's an art form
                            that brings people together. Our culinary adventure began with a simple idea: to create a
                            platform where food lovers could explore a diverse range of flavors, all from the comfort of
                            their homes. Whether you're craving a comforting bowl of <em>ramen</em> or an exotic
                            <em> curry</em>, QuickServe is here to satisfy your taste buds.
                        </p>
                </div>
            </section>

            <section id='chefs' className="chefs" ref={chefsRef}>
                <h2>Our Professional Chefs</h2>
                <div className="chefs-container">
                    <div className="chef">
                        <img src={chef1} alt="Chef 1" />
                        <h3>Walter White</h3>
                        <p>Master Chef</p>
                    </div>
                    <div className="chef">
                        <img src={chef2} alt="Chef 2" />
                        <h3>Sarah Johnson</h3>
                        <p>Patissier</p>
                    </div>
                    <div className="chef">
                        <img src={chef3} alt="Chef 3" />
                        <h3>William Anderson</h3>
                        <p>Cook</p>
                    </div>
                </div>
            </section>

            <section id='menu' className="menu" ref={menuRef}>
                <h2>Our Delicious Menu</h2>
                <div className="home-menu-container">
                    <div className="home-menu-item">
                        <img src={dish1} alt="Dish 1" />
                        <h3>Special Pasta</h3>
                        <p>Delicious pasta with fresh ingredients.</p>
                    </div>
                    <div className="home-menu-item">
                        <img src={dish2} alt="Dish 2" />
                        <h3>Grilled Salmon</h3>
                        <p>Fresh salmon grilled to perfection.</p>
                    </div>
                    <div className="home-menu-item">
                        <img src={dish3} alt="Dish 3" />
                        <h3>Tiramisu</h3>
                        <p>Classic Italian dessert with a rich flavor.</p>
                    </div>
                </div>
            </section>

            {/* <section id='contact' className="contact" ref={contactRef}>
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <p>Have questions or want to book a table?</p>
                    <p><strong>Phone:</strong> +1 5589 55488 55</p>
                    <p><strong>Email:</strong> info@example.com</p>
                    <p><strong>Address:</strong> A108 Adam Street, New York, NY 535022</p>
                </div>
            </section> */}

            

            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-geo-alt icon"></i>
                            <div className="address">
                                <h4>Address</h4>
                                <p>A108 Adam Street</p>
                                <p>New York, NY 535022</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-telephone icon"></i>
                            <div>
                                <h4>Contact</h4>
                                <p>
                                    <strong>Phone:</strong> <span>+1 5589 55488 55</span><br />
                                    <strong>Email:</strong> <span>info@example.com</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-clock icon"></i>
                            <div>
                                <h4>Opening Hours</h4>
                                <p>
                                    <strong>Mon-Sat:</strong> <span>11AM - 11PM</span><br />
                                    <strong>Sunday:</strong> <span>Closed</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4>Follow Us</h4>
                            <div className="social-links d-flex">
                                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>2024</span> <strong className="px-1 sitename">QuickServe</strong> <span>All Rights Reserved</span></p>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;

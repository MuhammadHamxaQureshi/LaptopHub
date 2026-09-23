import './App.css'

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Laptop<span>Hub</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Open navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#laptops">
                  Laptops
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#offers">
                  What We Offer
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="btn btn-light nav-button" href="#laptops">
                  Shop Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero" id="home">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <p className="eyebrow">
                SMART CHOICE. BETTER VALUE.
              </p>

              <h1>
                Find your perfect <span>laptop</span> for less.
              </h1>

              <p className="hero-text">
                Reliable second-hand laptops, carefully checked and ready
                for your next idea, class or business.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a href="#laptops" className="btn btn-primary btn-lg">
                  Explore Laptops
                </a>

                <a href="#offers" className="btn btn-outline-light btn-lg">
                  Why LaptopHub?
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>500+</strong>
                  <small>Laptops sold</small>
                </div>

                <div>
                  <strong>4.9/5</strong>
                  <small>Happy customers</small>
                </div>

                <div>
                  <strong>30 days</strong>
                  <small>Warranty included</small>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85"
                  alt="Open laptop on a desk"
                />

                <div className="price-badge">
                  <small>Starting from</small>
                  <strong>$249</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Laptop carousel */}
      <section className="section-space" id="laptops">
        <div className="container">

          <div className="section-heading d-flex justify-content-between align-items-end mb-4">
            <div>
              <p className="eyebrow">OUR COLLECTION</p>
              <h2>Popular laptops</h2>
            </div>

            <a href="#laptops" className="text-link d-none d-sm-block">
              View all laptops →
            </a>
          </div>

          <div
            id="laptopCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >

            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#laptopCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-label="Slide 1"
              ></button>

              <button
                type="button"
                data-bs-target="#laptopCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>

              <button
                type="button"
                data-bs-target="#laptopCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner rounded-4">

              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="laptop-slide">

                  <img
                    src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&w=900&q=85"
                    alt="Silver laptop"
                  />

                  <div>
                    <p className="eyebrow">BEST SELLER</p>

                    <h3>Premium work laptops</h3>

                    <p>
                      Fast, clean and ready for work or study.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                      View details
                    </a>
                  </div>

                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="laptop-slide">

                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85"
                    alt="Laptop on a table"
                  />

                  <div>
                    <p className="eyebrow">FOR CREATORS</p>

                    <h3>Power for your ideas</h3>

                    <p>
                      Great performance without the expensive price tag.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                      View details
                    </a>
                  </div>

                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="laptop-slide">

                  <img
                    src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=85"
                    alt="Laptop with coffee"
                  />

                  <div>
                    <p className="eyebrow">BUDGET FRIENDLY</p>

                    <h3>Everyday essentials</h3>

                    <p>
                      Affordable laptops for everyday tasks and learning.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                      View details
                    </a>
                  </div>

                </div>
              </div>

            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#laptopCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#laptopCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="offers section-space" id="offers">
        <div className="container">

          <div className="text-center section-heading mb-5">
            <p className="eyebrow">WHY CHOOSE US</p>

            <h2>More value with every laptop</h2>

            <p>
              We make buying a used laptop simple, safe and stress-free.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="offer-card">

                <div className="icon">✓</div>

                <h3>Quality checked</h3>

                <p>
                  Every laptop is tested, cleaned and checked by our team
                  before delivery.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="offer-card">

                <div className="icon">↻</div>

                <h3>30-day warranty</h3>

                <p>
                  Shop with confidence. Get support if something does not
                  feel right.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="offer-card">

                <div className="icon">♡</div>

                <h3>Honest prices</h3>

                <p>
                  Get dependable technology at prices that are fair and
                  transparent.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">

          <div>
            <a className="navbar-brand fw-bold" href="#">
              Laptop<span>Hub</span>
            </a>

            <p className="mb-0 mt-2">
              Better laptops. Better value.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#laptops">Laptops</a>
            <a href="#offers">Services</a>
            <a href="mailto:hello@laptophub.com">
              Email us
            </a>
          </div>

        </div>

        <div className="container copyright">
          © 2025 LaptopHub. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App

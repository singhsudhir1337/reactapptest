import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const img = "https://picsum.photos/200/300";
const img1 = "https://picsum.photos/250/300";
const img2 = "https://picsum.photos/150/300";

ReactDOM.render(
	<>
  		<header id="header" className="fixed-top d-flex align-items-center">
		    <div className="container">
		    	<div className="header-container d-flex align-items-center justify-content-between">
		    		<div className="logo">
			        <h1 className="text-light"><a href="index.html"><span>Bethany</span></a></h1>
			        <nav id="navbar" class="navbar">
			          <ul>
			            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
			            <li><a className="nav-link scrollto" href="#about">About</a></li>
			            <li><a className="nav-link scrollto" href="#services">Services</a></li>
			            <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
			            <li><a className="nav-link scrollto" href="#team">Team</a></li>
			            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
			              <ul>
			                <li><a href="#">Drop Down 1</a></li>
			                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
			                  <ul>
			                    <li><a href="#">Deep Drop Down 1</a></li>
			                    <li><a href="#">Deep Drop Down 2</a></li>
			                    <li><a href="#">Deep Drop Down 3</a></li>
			                    <li><a href="#">Deep Drop Down 4</a></li>
			                    <li><a href="#">Deep Drop Down 5</a></li>
			                  </ul>
			                </li>
			                <li><a href="#">Drop Down 2</a></li>
			                <li><a href="#">Drop Down 3</a></li>
			                <li><a href="#">Drop Down 4</a></li>
			              </ul>
			            </li>
			            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
			            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
			          </ul>
			          <i className="bi bi-list mobile-nav-toggle"></i>
			        </nav>
		        </div>
		    	</div>
		    </div>
		</header>
		<section id="hero" className="d-flex align-items-center">
		    <div className="container text-center position-relative" >
		      <h1>Your New Online Presence with Bethany</h1>
		      <h2>We are team of talented designers making websites with Bootstrap</h2>
		      <a href="#about" className="btn-get-started scrollto">Get Started</a>
		    </div>
		</section>
		<main id="main">
			<section id="clients" className="clients">
		      <div className="container">

		        <div className="row">

		          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" >
		            <img src="assets/img/clients/client-1.png" className="img-fluid" alt=""></img>
		          </div>

		          <div className="col-lg-2 col-md-4 col-6 d-flex alclassNameign-items-center" >
		            <img src="assets/img/clients/client-2.png" className="img-fluid" alt=""></img>
		          </div>

		          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center">
		            <img src="assets/img/clients/client-3.png" className="img-fluid" alt=""></img>
		          </div>

		          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center">
		            <img src="assets/img/clients/client-4.png" className="img-fluid" alt=""></img>
		          </div>

		          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center" >
		            <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""></img>
		          </div>

		          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center">
		            <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""></img>
		          </div>

		        </div>

		      </div>
		    </section>
		     <section id="about" className="about">
		      <div className="container">

		        <div className="row content">
		          <div className="col-lg-6">
		            <h2>Eum ipsam laborum deleniti velitena</h2>
		            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
		          </div>
		          <div className="col-lg-6 pt-4 pt-lg-0">
		            <p>
		              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		              culpa qui officia deserunt mollit anim id est laborum
		            </p>
		            <ul>
		              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
		              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
		              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
		            </ul>
		            <p className="font-italic">
		              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
		              magna aliqua.
		            </p>
		          </div>
		        </div>

		      </div>
		    </section>
		    <section id="counts" className="counts">
		      <div className="container">

		        <div className="row counters">

		          <div className="col-lg-3 col-6 text-center">
		            <h2>232</h2>
		            <p>Clients</p>
		          </div>

		          <div className="col-lg-3 col-6 text-center">
		          	<h2>456</h2>
		            <p>Projects</p>
		          </div>

		          <div className="col-lg-3 col-6 text-center">
		          	<h2>1456</h2>
		            <p>Hours Of Support</p>
		          </div>

		          <div className="col-lg-3 col-6 text-center">
		          	<h2>15</h2>
		            <p>Hard Workers</p>
		          </div>

		        </div>

		      </div>
		    </section>
		    <section id="why-us" className="why-us">
		      <div className="container">

		        <div className="row">
		          <div className="col-lg-4 d-flex align-items-stretch" >
		            <div className="content">
		              <h3>Why Choose Bethany for your company website?</h3>
		              <p>
		                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
		                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
		              </p>
		              <div className="text-center">
		                <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-8 d-flex align-items-stretch">
		            <div className="icon-boxes d-flex flex-column justify-content-center">
		              <div className="row">
		                <div className="col-xl-4 d-flex align-items-stretch" >
		                  <div className="icon-box mt-4 mt-xl-0">
		                    <i className="bx bx-receipt"></i>
		                    <h4>Corporis voluptates sit</h4>
		                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
		                  </div>
		                </div>
		                <div className="col-xl-4 d-flex align-items-stretch" >
		                  <div className="icon-box mt-4 mt-xl-0">
		                    <i className="bx bx-cube-alt"></i>
		                    <h4>Ullamco laboris ladore pan</h4>
		                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
		                  </div>
		                </div>
		                <div className="col-xl-4 d-flex align-items-stretch">
		                  <div className="icon-box mt-4 mt-xl-0">
		                    <i className="bx bx-images"></i>
		                    <h4>Labore consequatur</h4>
		                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>

		      </div>
		    </section>
		    <section id="cta" class="cta">
		      <div class="container">

		        <div class="text-center" >
		          <h3>Call To Action</h3>
		          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		          <a className="cta-btn" href="#">Call To Action</a>
		        </div>

		      </div>
		    </section>

		    <section id="services" className="services section-bg">
		      <div className="container">

		        <div className="row">
		          <div className="col-lg-4">
		            <div className="section-title" >
		              <h2>Services</h2>
		              <p>Magnam dolores commodi suscipit nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
		            </div>
		          </div>
		          <div className="col-lg-8">
		            <div className="row">
		              <div className="col-md-6 d-flex align-items-stretch">
		                <div className="icon-box" >
		                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
		                  <h4><a href="">Lorem Ipsum</a></h4>
		                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
		                </div>
		              </div>

		              <div className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
		                <div className="icon-box" >
		                  <div className="icon"><i className="bx bx-file"></i></div>
		                  <h4><a href="">Sed ut perspiciatis</a></h4>
		                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
		                </div>
		              </div>

		              <div className="col-md-6 d-flex align-items-stretch mt-4">
		                <div className="icon-box" >
		                  <div className="icon"><i className="bx bx-tachometer"></i></div>
		                  <h4><a href="">Magni Dolores</a></h4>
		                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
		                </div>
		              </div>

		              <div className="col-md-6 d-flex align-items-stretch mt-4">
		                <div className="icon-box" >
		                  <div className="icon"><i className="bx bx-world"></i></div>
		                  <h4><a href="">Nemo Enim</a></h4>
		                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
		                </div>
		              </div>

		            </div>
		          </div>
		        </div>

		      </div>
		    </section>
		    <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title" >
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" >
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" >

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div classNameclassName="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""></img>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">

        <div className="row">
          <div className="col-lg-4">
            <div className="section-title" >
              <h2>Testimonials</h2>
              <p>Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </div>
          <div className="col-lg-8" >

            <div className="testimonials-slider swiper-container" >
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""></img>
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-2.jpg" classNameclassName="testimonial-img" alt=""></img>
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>

                <div classNameclassName="swiper-slide">
                  <div classNameclassName="testimonial-item">
                    <p>
                      <i classNameclassName="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i classNameclassName="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-3.jpg" classNameclassName="testimonial-img" alt=""></img>
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""></img>
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""></img>
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="team" className="team">
		      <div className="container">

		        <div className="row">
		          <div className="col-lg-4">
		            <div className="section-title" >
		              <h2>Team</h2>
		              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
		            </div>
		          </div>
		          <div className="col-lg-8">
		            <div className="row">

		              <div className="col-lg-6">
		                <div className="member" >
		                  <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""></img></div>
		                  <div className="member-info">
		                    <h4>Walter White</h4>
		                    <span>Chief Executive Officer</span>
		                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
		                    <div className="social">
		                      <a href=""><i className="ri-twitter-fill"></i></a>
		                      <a href=""><i className="ri-facebook-fill"></i></a>
		                      <a href=""><i className="ri-instagram-fill"></i></a>
		                      <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
		                    </div>
		                  </div>
		                </div>
		              </div>

		              <div className="col-lg-6 mt-4 mt-lg-0">
		                <div className="member" >
		                  <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""></img></div>
		                  <div className="member-info">
		                    <h4>Sarah Jhonson</h4>
		                    <span>Product Manager</span>
		                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
		                    <div className="social">
		                      <a href=""><i className="ri-twitter-fill"></i></a>
		                      <a href=""><i className="ri-facebook-fill"></i></a>
		                      <a href=""><i className="ri-instagram-fill"></i></a>
		                      <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
		                    </div>
		                  </div>
		                </div>
		              </div>

		              <div className="col-lg-6 mt-4">
		                <div className="member" >
		                  <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""></img></div>
		                  <div className="member-info">
		                    <h4>William Anderson</h4>
		                    <span>CTO</span>
		                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
		                    <div className="social">
		                      <a href=""><i className="ri-twitter-fill"></i></a>
		                      <a href=""><i className="ri-facebook-fill"></i></a>
		                      <a href=""><i className="ri-instagram-fill"></i></a>
		                      <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
		                    </div>
		                  </div>
		                </div>
		              </div>

		              <div className="col-lg-6 mt-4">
		                <div className="member" >
		                  <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""></img></div>
		                  <div className="member-info">
		                    <h4>Amanda Jepson</h4>
		                    <span>Accountant</span>
		                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
		                    <div className="social">
		                      <a href=""><i className="ri-twitter-fill"></i></a>
		                      <a href=""><i className="ri-facebook-fill"></i></a>
		                      <a href=""><i className="ri-instagram-fill"></i></a>
		                      <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
		                    </div>
		                  </div>
		                </div>
		              </div>

		            </div>

		          </div>
		        </div>

		      </div>
		    </section>
		    <section id="contact" className="contact">
	      <div className="container">
	        <div className="row">
	          <div className="col-lg-4" >
	            <div className="section-title">
	              <h2>Contact</h2>
	              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
	            </div>
	          </div>

	          <div className="col-lg-8" >
	            <iframe className="iframedesign" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
	            <div className="info mt-4">
	              <i className="bi bi-geo-alt"></i>
	              <h4>Location:</h4>
	              <p>A108 Adam Street, New York, NY 535022</p>
	            </div>
	            <div className="row">
	              <div className="col-lg-6 mt-4">
	                <div className="info">
	                  <i className="bi bi-envelope"></i>
	                  <h4>Email:</h4>
	                  <p>info@example.com</p>
	                </div>
	              </div>
	              <div className="col-lg-6">
	                <div className="info w-100 mt-4">
	                  <i className="bi bi-phone"></i>
	                  <h4>Call:</h4>
	                  <p>+1 5589 55488 55</p>
	                </div>
	              </div>
	            </div>

	            
	          </div>
	        </div>

	      </div>
	    </section>
		</main>
  	</>,
  	document.getElementById('root')
);

ReactDOM.render(
	<>
	<footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Bethany</h3>
            <p>
              A108 Adam Street <br></br>
              New York, NY 535022<br></br>
              United States <br></br><br></br>
              <strong>Phone:</strong> +1 5589 55488 55<br></br>
              <strong>Email:</strong> info@example.com<br></br>
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            
          </div>

        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>Bethany</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
	</>,
	document.getElementById('contact')
	);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

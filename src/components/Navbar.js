import React from 'react'

export default function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-clight bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Food Fusion</title>
  <link rel="icon" type="img" href="./Images/food fusion logo.jpg" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
  />
  {/* <link rel="stylesheet" href="assets/css/style.css"> */}
  <link rel="stylesheet" href="style.css" />
  <nav className="navbar">
    <div className="navbar-container">
      <input type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <h1 className="logo">
        <img src="./Images/food fusion logo.jpg" alt="img" height="40px" />
      </h1>
      <ul className="nav-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="menu.html">Menu</a>
        </li>
        <li>
          <a href="testimonial.html">Testimonial</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
      {/*Step 1 : Login form*/}
      <button
        onclick="document.getElementById('id01').style.display='block'"
        className="main-login-btn"
        style={{ width: "auto" }}
      >
        Login
      </button>
      <div id="id01" className="modal">
        <form className="modal-content animate" action="menu.html">
          <div className="imgcontainer">
            <span
              onclick="document.getElementById('id01').style.display='none'"
              className="close"
              title="Close Modal"
            >
              ×
            </span>
            <img
              src="Images/food fusion logo.jpg"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="container">
            <label>
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required=""
            />
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required=""
            />
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
          <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button
              type="button"
              onclick="document.getElementById('id01').style.display='none'"
              className="cancelbtn"
            >
              Cancel
            </button>
            <span className="psw">
              <a href="#">Forgot password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  </nav>
  <section className="showcase-area" id="showcase">
    <div className="showcase-container">
      <h1 className="main-title" id="home">
        Food Fusion
      </h1>
      <p>Bite Into Bliss</p>
      <a href="menu.html" className="btn btn-primary">
        Menu
      </a>
    </div>
  </section>
  <section id="about">
    <div className="about-wrapper container">
      <div className="about-text">
        <p className="small">About Us</p>
        <h2>We've been making healthy food last for 10 years</h2>
        <p>
          In the heart of our digital abode, A tapestry of food tales to be
          told. We are the dreamers of taste and hue, Crafting a gastronomic
          journey just for you. Spices pirouette, and herbs waltz free, A fusion
          ballet, a feast for thee. In our culinary haven, where boundaries
          blur, We concoct the magic that flavors confer.
        </p>
      </div>
      <div className="about-img">
        {/* <img src="./Images/6.jpg" alt="food" /> */}
        <div id="banner" className="d-flex">
          <img src="Images/14.jpg" alt="" />
          <img src="Images/1.jpg" alt="" />
          {/* <img src="Images/19.jpg" alt=""> */}
          <div id="banner-heading">
            <h1>
              <i>GET THE BEST OR NOTHING.</i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="food">
    <h2>Our Speciality..</h2>
    <h5>
      We provide a wide range of cuisines and dishes to choose from so that
      every foodie in town has their best experience with us.....
    </h5>
    <div className="food-container container">
      <div className="food-type Indian">
        <div className="img-container">
          <img src="./Images/2.jpg" alt="error" />
          <div className="img-content">
            <h3>Indian</h3>
            <a
              href="https://en.wikipedia.org/wiki/Indian_cuisinet"
              className="btn btn-primary"
              target="blank"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
      <div className="food-type Mexican">
        <div className="img-container">
          <img src="./Images/7.jpg" alt="error" />
          <div className="img-content">
            <h3>Mexican</h3>
            <a
              href="https://en.wikipedia.org/wiki/List_of_Mexican_dishes"
              className="btn btn-primary"
              target="blank"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
      <div className="food-type Italian">
        <div className="img-container">
          <img src="./Images/25.avif" alt="error" />
          <div className="img-content">
            <h3>Italian</h3>
            <a
              href="https://en.wikipedia.org/wiki/List_of_Italian_dishes"
              className="btn btn-primary"
              target="blank"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="container-1">
    <div className="outer">
      <div className="card">
        <img src="Images/1.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/2.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/3.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/4.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/5.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/6.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/7.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/8.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/9.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/10.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/11.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/12.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/13.jpg" alt="error" />
      </div>
      <div className="card">
        <img src="Images/14.jpg" alt="error" />
      </div>
    </div>
  </div>
  {/* <section id="food-menu">
  <h2 class="food-menu-heading">Food Fusion Menu..</h2>
  <div class="food-menu-container container">
      <div class="food-menu-item">
          <div class="food-img">
              <img src="Images/17.jpg" alt="" />
          </div>
          <div class="food-description">
              <h2 class="food-titile">Paneer Nawabi</h2>
              <p>
                 A royal delicacy of paneer cubes marinated in spicy flavours and grilled to perfection.
              </p>
              <p class="food-price">Price: &#8377; 449</p>
          </div>
      </div>

      <div class="food-menu-item">
          <div class="food-img">
              <img src="Images/12.jpg" alt="error" />
          </div>
          <div class="food-description">
              <h2 class="food-titile">Italian Pizza</h2>
              <p>
                 with the goodness of cheese and tangyness.
              </p>
              <p class="food-price">Price: &#8377; 409</p>
          </div>
      </div>
      <div class="food-menu-item">
          <div class="food-img">
              <img src="Images/11.jpg" alt="" />
          </div>
          <div class="food-description">
              <h2 class="food-titile">Aloo Fiesta</h2>
              <p>  
                  The versatility king -"Potato", in its most appetising from -'Aloo Tikki'.
              </p>
              <p class="food-price">Price: &#8377; 349</p>
          </div>
      </div>
      <div class="food-menu-item">
          <div class="food-img">
              <img src="Images/5.jpg" alt="" />
          </div>
          <div class="food-description">
              <h2 class="food-titile">Frappe</h2>
              <p>
                  flavours of your choice (Vanilla, Mocha, Caramel, Choco chips , Brownie , Hazelnuts ).
              </p>
              <p class="food-price">Price: &#8377; 289</p>
          </div>
      </div>
      <div class="food-menu-item">
          <div class="food-img">
              <img src="Images/16.jpg" alt="" />
          </div>
          <div class="food-description">
              <h2 class="food-titile">CheeseCake</h2>
              <p>
                 Soft fresh cake made up of cheese cream , sugar and eggs.
              </p>
              <p class="food-price">Price: &#8377; 276</p>
          </div>
      </div>
      <div class="food-menu-item">
          <div class="food-img">
              <img src="Images/4.jpg" alt="" />
          </div>
          <div class="food-description">
              <h2 class="food-titile">Spaghetti</h2>
              <p>
                Made up of tangi tomato sauce , A dusting of lemon zest and a fresh basil leaves ..With the goodness of Olive oil and cheese.
              </p>
              <p class="food-price">Price: &#8377; 502</p>
          </div>
      </div>
  </div>
    </section> */}
  <section id="testimonials">
    <h2 className="testimonial-title">What Our Customers Say..</h2>
    <div className="testimonial-container container">
      <div className="testimonial-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src="Images/R1.jpg" alt="" />
            <p className="customer-name">Simmi Gill</p>
          </div>
        </div>
        <div className="star-rating">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
        </div>
        <p className="testimonial-text">
          The food was done absolutely perfectly and the finishing touches made
          the dish complimentary all together. I will be here regularly!!
        </p>
      </div>
      <div className="testimonial-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src="Images/r4.jpg" alt="" />
            <p className="customer-name">Rishi Goenka</p>
          </div>
        </div>
        <div className="star-rating">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
        </div>
        <p className="testimonial-text">
          This place was absolutely amazing! From the food to the service, we
          were blown away. We will definitely be back! If you are looking for
          delicious Italian food this is the place to find it.
        </p>
      </div>
      <div className="testimonial-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src="Images/r5.jpg" alt="" />
            <p className="customer-name">Aditya Roy</p>
          </div>
        </div>
        <div className="star-rating">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
        </div>
        <p className="testimonial-text">
          The food was really good! The service was a bit slow but it looks like
          they just opened up. We can’t wait to try this place again.
        </p>
      </div>
    </div>
  </section>
  <section id="contact">
    <div className="contact-container container">
      <div className="contact-img">
        <img src="Images/24.jpg" alt="" />
      </div>
      <div className="form-container">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="E-Mail" />
        <input type="number" placeholder="Mobile" />
        <textarea
          cols={30}
          rows={6}
          placeholder="Type Your Message"
          defaultValue={""}
        />
        <a href="#" className="btn btn-primary">
          Submit
        </a>
      </div>
    </div>
  </section>
  <div className="footer-basic">
    <footer>
      <div className="social">
        <a href="#">
          <i className="icon ion-social-google" />
        </a>
        <a href="#">
          <i className="icon ion-social-github" />
        </a>
        <a href="#">
          <i className="icon ion-social-twitter" />
        </a>
        <a href="#">
          <i className="icon ion-social-facebook" />
        </a>
      </div>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#">Home</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Services</a>
        </li>
        <li className="list-inline-item">
          <a href="#">About</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Terms</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <p className="copyright">Food Fusion © 2024</p>
    </footer>
  </div>
  {/* .................../ JS Code for smooth scrolling /...................... */}
</>


  </>
  )
}


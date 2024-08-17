import React from 'react'

export default function Contact() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>contact us</title>
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
  {/* CSS Files */}
  <link
    rel="stylesheet"
    href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/bs-brain@2.0.3/components/contacts/contact-5/assets/css/contact-5.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n\n@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");\n\n*{\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.html {\n  font-size: 62.5%;\n}\n\nbody {\n  overflow-x: hidden;\n  font-family: "Poppins", sans-serif;\n  background:radial-gradient(\n    rgba(215, 126, 126, 0.653),\n    rgba(225, 136, 136, 0.336),\n    rgba(166, 224, 183, 0.336)\n   )  \n  /* background: linear-gradient(pink,rgb(251, 251, 251)); */\n}\n::-webkit-scrollbar{\n  width: 10px;\n}\n::-webkit-scrollbar-track{\n  background-color: pink;\n  border-radius: 50%;\n}\n::-webkit-scrollbar-thumb{\n  background-color: #c15ca1;\n}\n  \n.navbar {\n  box-shadow: 0px 5px 10px 0px #aaa;\n  position: fixed;\n  width: 100%;\n  background: #fff;\n  color: #000;\n  opacity: 0.85;\n  height: 50px;\n  z-index: 12;\n}\n.back-button{\n  cursor: pointer;\n  margin-left: 15px;\n  margin-top: -25px;\n}\n.nav-items {\n  order: 2;\n  display: flex;\n  margin-right: 26rem;\n}\n\n.nav-items li {\n  list-style: none;\n  margin-left: 1.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 1.2rem;\n}\n\n.nav-items a {\n  text-decoration: none;\n  color: #444;\n  font-weight: 500;\n  transition: color 0.3s ease-in-out;\n}\n\n.nav-items a:hover {\n  color: #9a598e;\n  transition: color 0.3s ease-in-out;\n}\n\n\n\n/* ............//// Showcase styling ////......... */\n.showcase-area {\n  height: 50vh;\n      background: radial-gradient(\n      rgba(215, 126, 126, 0.653),\n      rgba(225, 136, 136, 0.336),\n      rgba(166, 224, 183, 0.336)\n     \n    ), url(Images/23.jpg);\n   background-size: cover;\n   background-position: center;\n   background-repeat: no-repeat;\n  font-family: Cambria, Cochin, Georgia, Times, \'Times New Roman\', serif;\n}\n\n.showcase-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  font-size: 2rem;\n  color: #f3f6f7;\n  text-shadow: 0 0 5px #0f0f0f, 0 0 10px #080808,\n               0 0 20px #f9f4f3, 0 0 30px #f8f3f2,\n               0 0 40px #dc9a9a;\n}\n\n.showcase-container a{\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n}\n\n.main-title {\n  text-transform: uppercase;\n  margin-top: 1.9em;\n  color: #fffcfc;\n}\n/* ............footer............... */\n\n.footer-basic {\n  border-top: solid rgb(172, 67, 114);\n  padding:40px 0;\n  padding-top: 7rem;\n  background:radial-gradient(\n    rgba(215, 126, 126, 0.653),\n    rgba(225, 136, 136, 0.336),\n    rgba(166, 224, 183, 0.336)\n   ) \n}\n\n.footer-basic ul {\n  transform: scale(1);\n  padding:0;\n  list-style:none;\n  text-align:center;\n  font-size:18px;\n  line-height:1.6;\n  display: flex;\n}\n\n.footer-basic li {\n  padding:0 10px;\n}\n\n.footer-basic ul a {\n  color:inherit;\n  text-decoration:none;\n  opacity:0.8;\n}\n\n.footer-basic ul a:hover {\n  opacity:2;\n}\n\n.footer-basic .social {\n  text-align:center;\n  padding-bottom:25px;\n}\n\n.footer-basic .social > a {\n  font-size:30px;\n  width:40px;\n  height: 40px;\n  line-height:40px;\n  display:inline-block;\n  text-align: center;\n  border-radius:50%;\n  border:1px solid #514f4f;\n  margin:0 8px;\n  color:inherit;\n  opacity:0.75;\n}\n\n.footer-basic .social > a:hover {\n  opacity:0.9;\n  transform: scale(1.3);\n  transition: 0.3s ease-in-out;\n}\n.list-inline {\n  text-align: center;\n  justify-content: center;\n  padding-bottom:25px;\n}\n\n.footer-basic .copyright {\n  margin-top:15px;\n  text-align:center;\n  font-size:13px;\n  color:#aaa;\n  margin-bottom:0;\n}\n\n\n\n'
    }}
  />
  {/* nav code */}
  <nav className="navbar">
    <div className="back-button" onclick="previous()" id="backward">
      <span style={{ fontSize: 30, float: "left" }}>←</span>
    </div>
    <ul className="nav-items">
      <li>
        <a href="index.html">Home</a>
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
  </nav>
  <section className="showcase-area" id="showcase">
    <div className="showcase-container">
      <h1 className="main-title" id="home">
        Contact Us
      </h1>
    </div>
  </section>
  {/* Contact 5 - Bootstrap Brain Component */}
  <section className="py-3 py-md-5 py-xl-8">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8">
          <h3 className="fs-5 mb-2 text-secondary text-uppercase">Contact</h3>
          <h2 className="display-5 mb-4 mb-md-5 mb-xl-8">
            We're always on the lookout to work with new clients. Please get in
            touch in one of the following ways.
          </h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
        <div className="col-12 col-lg-6">
          <div className="border overflow-hidden">
            <form action="#!">
              <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                <div className="col-12">
                  <label htmlFor="fullname" className="form-label">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    name="fullname"
                    defaultValue=""
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      defaultValue=""
                      required=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-telephone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    defaultValue=""
                    required=""
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={3}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row justify-content-xl-center">
            <div className="col-12 col-xl-11">
              <div className="mb-4 mb-md-5">
                <div className="mb-3 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    className="bi bi-geo"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2">Office</h4>
                  <p className="mb-2">Please visit us to have a discussion.</p>
                  <hr className="w-50 mb-3 border-dark-subtle" />
                  <address className="m-0 text-secondary">
                    8014 Edith Blvd NE, Albuquerque, New York, United States
                  </address>
                </div>
              </div>
              <div className="row mb-sm-4 mb-md-5">
                <div className="col-12 col-sm-6">
                  <div className="mb-4 mb-sm-0">
                    <div className="mb-3 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-telephone-outbound"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-2">Phone</h4>
                      <p className="mb-2">Please speak with us directly.</p>
                      <hr className="w-75 mb-3 border-dark-subtle" />
                      <p className="mb-0">
                        <a
                          className="link-secondary text-decoration-none"
                          href="tel:+15057922430"
                        >
                          (505) 792-2430
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="mb-4 mb-sm-0">
                    <div className="mb-3 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-envelope-at"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-2">Email</h4>
                      <p className="mb-2">Please write to us directly.</p>
                      <hr className="w-75 mb-3 border-dark-subtle" />
                      <p className="mb-0">
                        <a
                          className="link-secondary text-decoration-none"
                          href="mailto:demo@yourdomain.com"
                        >
                          demo@yourdomain.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-3 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    className="bi bi-alarm"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2">Opening Hours</h4>
                  <p className="mb-2">Explore our business opening hours.</p>
                  <hr className="w-50 mb-3 border-dark-subtle" />
                  <div className="d-flex mb-1">
                    <p className="text-secondary fw-bold mb-0 me-5">
                      Mon - Fri
                    </p>
                    <p className="text-secondary mb-0">9am - 5pm</p>
                  </div>
                  <div className="d-flex">
                    <p className="text-secondary fw-bold mb-0 me-5">
                      Sat - Sun
                    </p>
                    <p className="text-secondary mb-0">9am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
</>

    </div>
  )
}

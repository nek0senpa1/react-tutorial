import React, { Component } from 'react';
import logo from '../img/home/home-jumbotron.png';
import logoMobile from '../img/home/home-mobile-jumbotron.png';
import menuButton from '../img/nav-hamburger.png';
import menuButtonClose from '../img/nav-hamburger-close.png';
class HomePage extends Component {
  render() {
    return (
      <body>
        <header>
          <section className="nav-container">
            <h3>S&J</h3>
            <img className="menu-button" src={menuButton} alt="menu button." />
          </section>

          <div className="menu">
            <a href="index.html">Home</a>
            <a href="services.html">Services</a>
            <a href="contact.html">Contact</a>
          </div>
        </header>

        <section className="main-img">
          <img className="img-desktop" src={logo} alt="main image" />
          <img className="img-mobile" src={logoMobile} alt="main mobile image" />

          <h1>Integrity,<br />Excellence,<br />Progress.</h1>

        </section>



        <section className="container home">
          <section className="section">
            <section className='box'>
              <img className="img-desktop" src="../img/home/home-img-1.png" alt="first box image" />
              <img className="img-mobile" src="../img/home/home-mobile-img-1.png" alt="first mobile box image" />

            </section>
            <section className="box">
              <h2>Smith & Jones Architects</h2>
              <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem </p>
              <button>Learn More</button>
            </section>
          </section>
        </section>

        <section className="section2">

          <section className="box">
            <img className="img-desktop" src="../img/home/home-img-2.png" alt="second box image" />
            <img className="img-mobile" src="../img/home/home-mobile-img-2.png" alt="second mobile box image" />
          </section>

          <section className='box'>
            <h2>Futuristic Designs</h2>
            <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem </p>
            <button>View Designs</button>
          </section>
        </section>



        <section className="bottom-section">
          <h2>Recent Projects</h2>

          <section className="projects">
            <div className="projects-img">
              <img className="img-desktop" src="../img/home/home-villas-img.png" alt="third box image" />
              <img className="img-mobile" src="../img/home/home-mobile-villas-img.png" alt="third mobile box image" />
              <h3 className="right-side">THE VILLAS</h3>
            </div>

            <section className="text">
              <p>The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </section>
          </section>

          <section className="projects">
            <div className="projects-img">
              <img className="img-desktop" src="../img/home/home-outskirts-img.png" alt="fourth box image" />
              <img className="img-mobile" src="../img/home/home-mobile-outskirts-img.png" alt="fourth mobile box image" />
              <h3 className="left-side">OUTSKIRTS</h3>
            </div>
            <section className="text">
              <p>The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </section>
          </section>

          <section className="projects">
            <div className="projects-img">
              <img className="img-desktop" src="../img/home/home-the-blocks-img.png" alt="fourth box image" />
              <img className="img-mobile" src="../img/home/home-mobile-the-blocks-img.png" alt="fourth mobile box image" />
              <h3 className="right-side">THE BLOCKS</h3>
            </div>

            <section className="text">
              <p>The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </section>
          </section>
        </section>





        <footer>
          <section className="container">
            <section className="email">
              <h4>Interested in starting a project?</h4>
              <h4>Let’s talk:</h4>
              <input type="text" name="email" placeholder="Enter email" />
              <p>We'll never share your email with anyone else.</p>
            </section>

            <section className="location">
              <address>
                <h4>New York</h4>
                <p>123 Lane<br />
                  Suite 100<br />
                  Albany, NY 12345<br />
                  202 555 0144</p>
              </address>

              <address>
                <h4>Florida</h4>
                <p>Ocean Drive<br />
                  Suite 201<br />
                  Orlando, FL 22345<br />
                  502 555 0144</p>
              </address>

              <address>
                <h4>California</h4>
                <p>Mountain Street<br />
                  Suite 105<br />
                  San Diego, CA 22345<br />
                  702 555 0144</p>
              </address>
            </section>
            <section className="copyright">
              Copyright © 2018 Smith and Jones
                </section>
          </ section>

        </footer>
      </body>

    )
  }
}

export default HomePage;

import React from 'react'
import './App.css'
import $ from 'jquery';
import image1 from './images/syed.png'
function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
    var j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: '.tc-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.listing-carousel-button-next',
        prevEl: '.listing-carousel-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },

      }
    });
  }

  // bubbles -----------------


  setInterval(function () {
    // var size = randomValue(sArray);
    $('.bubbles').append('<div class="individual-bubble" style="left: ' +

      // randomValue(bArray)
      + 'px; width: '
      +
      // size +
      'px; height:'
      +
      // size +
      'px;"></div>');
    $('.individual-bubble').animate({
      'bottom': '100%',
      'opacity': '-=0.7'
    }, 4000, function () {
      $(this).remove()
    });
  }, 350);

}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});
const App = () => {
  return (
    <section>
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <span className="section-separator"></span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      <div className="testimonials-carousel-wrap">
        <div className="listing-carousel-button listing-carousel-button-next"><i className="fa fa-caret-right" style={{ color: "#fff" }}></i></div>
        <div className="listing-carousel-button listing-carousel-button-prev"><i className="fa fa-caret-left " style={{ color: "#fff" }}></i></div>
        <div className="testimonials-carousel">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="testi-avatar"><img src='https://avatars.githubusercontent.com/u/64885201?s=64&v=4' /></div>
                  <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                  <div className="testimonials-text">
                    <div className="listing-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p>I have been working here since 3 years. I would like to say that this is one of the one company that you people can work with and enhance your future.I love this company so much that I would be working here till my last breath.</p>
                    <a href="#" className="text-link"></a>
                    <div className="testimonials-avatar">
                      <h3>Sweths Shankar</h3>
                      <h4>Senior Developer</h4>
                    </div>
                  </div>
                  <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="testi-avatar"><img src='https://avatars.githubusercontent.com/u/89839141?s=64&v=4' /></div>
                  <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                  <div className="testimonials-text">
                    <div className="listing-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p>Hi, all I am from Nepal and I am working here since a year.I would suggest you to join this company as it gives you emmence opportunity to explore yourself beyond your limit.The employee here are very co-perative.I joined this company as a trainee and now I can proudly say that I am professional coder.</p>
                    <a href="#" className="text-link"></a>
                    <div className="testimonials-avatar">
                      <h3>Bijay Shankar</h3>
                      <h4>Software Developer</h4>
                    </div>
                  </div>
                  <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="testi-avatar"><img src='https://avatars.githubusercontent.com/u/84720649?s=400&u=038102d16f44b849c0b6280c3521590b25776fa3&v=4' /></div>
                  <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                  <div className="testimonials-text">
                    <div className="listing-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p>Started my career as a junior software developer and learnt everything at here  and my continuous efforts and organization opportunities helped me to got a chance to work in various project ann that helped me a lot in my interpersonal skills n changed my life. com</p>
                    <a href="#" className="text-link"></a>
                    <div className="testimonials-avatar">
                      <h3>Ganesh Dimri</h3>
                      <h4>Software Developer</h4>
                    </div>
                  </div>
                  <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testi-item">
                  <div className="testi-avatar"><img src={image1} /></div>
                  <div className="testimonials-text-before"><i className="fa fa-quote-right"></i></div>
                  <div className="testimonials-text">
                    <div className="listing-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p>Enjoyed my life to the fullest while I was working here for a more than a year.I missed all my former employee especially swetha as she was the one who was always by my side whenever I had some doubt regarding my technical skill.I would recommend you to join this company as you will get lot to learn from the friendly enviroment provided by the management.I wish I would had extended my stay here but this was the perfect time to leave as I want to challenge my-self and explore the vast amount of technical knowledge so that I can achieve my further goal.At last wanted to say that this company was my first step in achieving my dream goal.Thank a lot</p>
                    <a href="#" className="text-link"></a>
                    <div className="testimonials-avatar">
                      <h3>Syed Hussain Pasha</h3>
                      <h4>Former Employee</h4>
                      <h4>Senior Software Developer(Tech Mahindra)</h4>
                    </div>
                  </div>
                  <div className="testimonials-text-after"><i className="fa fa-quote-left"></i></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="tc-pagination"></div>
      </div>
    </section>
  )
}

export default App
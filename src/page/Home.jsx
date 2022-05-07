import React from "react";
import Navbar from "../component/Navbar";
import logo from "../assets/img/logoNCC 1.png";
import icon1 from "../assets/img/css-icon 1.png";
import icon2 from "../assets/img/html-icon 1.png";
import icon3 from "../assets/img/url-icon 1.png";

const HomePage = () => {
  return (
    <div>
      <div className="home-page__body">
        <Navbar />
        <div className="home-page__content">
          <div className="home-page__logo">
            <img src={logo} alt="" />
          </div>
          <div className="home-page__details">
            <h3> Lorem ipsum dolor sit amet ?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae, commodi. Similique, eos? Omnis dolorum saepe
              architecto officia tempore atque optio cumque perspiciatis, maxime
              sequi? Eos ipsam autem doloremque officiis possimus.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Repudiandae,
              commodi. Similique, eos? Omnis dolorum saepe architecto officia
              tempore atque optio cumque perspiciatis, maxime sequi? Eos ipsam
              autem doloremque officiis possimus.
            </p>
          </div>
          <div className="home-page__blocks">
            <div className="home-page__blocks__element">
              <h3> Lorem ipsum dolor sit amet ?</h3>
              <img src={icon1} alt="" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, commodi. Similique, eos? Omnis dolorum saepe
                architecto officia tempore atque optio cumque perspiciatis,
                maxime sequi? Eos ipsam autem doloremque officiis possimus.Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
                commodi. Similique, eos? Omnis dolorum saepe architecto officia
                tempore atque optio cumque perspiciatis, maxime sequi? Eos ipsam
                autem doloremque officiis possimus.
              </p>
            </div>
            <div className="home-page__blocks__element">
              <h3> Lorem ipsum dolor sit amet ?</h3>
              <img src={icon2} alt="" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, commodi. Similique, eos? Omnis dolorum saepe
                architecto officia tempore atque optio cumque perspiciatis,
                maxime sequi? Eos ipsam autem doloremque officiis possimus.Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
                commodi. Similique, eos? Omnis dolorum saepe architecto officia
                tempore atque optio cumque perspiciatis, maxime sequi? Eos ipsam
                autem doloremque officiis possimus.
              </p>
            </div>{" "}
            <div className="home-page__blocks__element">
              <h3> Lorem ipsum dolor sit amet ?</h3>

              <img src={icon3} alt="" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, commodi. Similique, eos? Omnis dolorum saepe
                architecto officia tempore atque optio cumque perspiciatis,
                maxime sequi? Eos ipsam autem doloremque officiis possimus.Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
                commodi. Similique, eos? Omnis dolorum saepe architecto officia
                tempore atque optio cumque perspiciatis, maxime sequi? Eos ipsam
                autem doloremque officiis possimus.
              </p>
            </div>
          </div>
          <div className="home-page__coppyright">Coppyright@2021</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

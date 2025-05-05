import React from "react";

function Hero() {
  return (
    <section className="relative">
      <div>
        <h1 className="text-4xl uppercase">
          Himalayan
          <br /> <span>Textile</span>
        </h1>
        <div className="">
            <div className="absolute bottom-0 left-0">
<img src="/assets/img/parallax/1.png" alt="parallax img1" />
            </div>
            <div>
<img src="/assets/img/parallax/2.png" alt="parallax img2"/>
            </div>
            <div>
<img src="/assets/img/parallax/3.png" alt="parallax img3"/>
            </div>
            <div>
<img src="/assets/img/parallax/4.png" alt="parallax img4"/>
            </div>
            <div>
<img src="/assets/img/parallax/5.png" alt="parallax img5"/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

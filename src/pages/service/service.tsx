"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import { ServiceItems } from "@/components/service/service-five";
import ServiceHero from "@/components/service/service-hero";
import ServiceSix from "@/components/service/service-six";
import { BrandItems } from "@/components/brand/brand-two";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";
import FooterFive from "@/layouts/footers/footer-five";
// animation
import { charAnimation, fadeAnimation, revelAnimationTwo } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";
import { footerTwoAnimation } from "@/utils/footer-anim";
import { heroScrollTextAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";

const ServiceMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
fadeAnimation();
servicePanel();
footerTwoAnimation();
revelAnimationTwo();
heroScrollTextAnim();
imageRevealAnimation();
hoverBtn();

    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* service hero */}
            <ServiceHero />
            {/* service hero */}

            {/* service area */}
            {/* <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        Services
                      </span> 
                      <h4 className="tp-service-5-title">
                        We strongly believe that only design reinforced by{" "}
                        <br />
                        strategy can provide real results.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="tp-service-5-wrap">
                  <ServiceItems />
                </div>
              </div>
            </div> */}
            {/* service area */}

            {/* service area */}
            <ServiceSix />
            {/* service area */}

            {/* brand area */}
            {/* <div className="tp-brand-4-area pt-120 pb-120">
              <div className="container">
                <div className="row gx-0">
                  <BrandItems />
                </div>
              </div>
            </div> */}
            {/* brand area */}

            {/* line image slider  */}
            {/* <LineImgSlider /> */}
            {/* line image slider  */}
              <br/>
              <br />
              <br />
              <br />
              <br />
            {/* big text */}
            <BigText />
            {/* big text */}
            
          </main>
          
          {/* footer area */}
          <FooterFive />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceMain;

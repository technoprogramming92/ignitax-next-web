"use client";

import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import LineText from "@/components/line-text/line-text";
import ProjectFour from "@/components/project/project-four";

import Wrapper from "@/layouts/wrapper";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);
import { textInvert } from "@/utils/text-invert";
import {
  charAnimation,
  fadeAnimation,
  revelAnimationOne,
  titleAnimation,
} from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import ProjectTwo from "@/components/project/project-two";
import { panelOneAnimation, studioPanel } from "@/utils/panel-animation";
import StudioPanelOne from "@/components/studio-panels/studio-panel-1";
import StudioPanelTwo from "@/components/studio-panels/studio-panel-2";
import StudioPanelThree from "@/components/studio-panels/studio-panel-3";
import StudioPanelFour from "@/components/studio-panels/studio-panel-4";
import StudioPanelFive from "@/components/studio-panels/studio-panel-5";
import PortfolioMasonryArea from "@/components/portfolio/portfolio-masonry-area";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { hoverBtn } from "@/utils/hover-btn";
import PortfolioSliderHomeEleven from "@/components/portfolio/slider/portfolio-slider-home-eleven";
import HeroBannerSix from "@/components/hero-banner/hero-banner-six";
import HeaderSix from "@/layouts/headers/header-six";
import HeaderFour from "@/layouts/headers/header-four";
import { useEffect } from "react";
import BottomNavbar from "@/layouts/headers/BottomNavbar";

const HomeIgnitax = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
      panelOneAnimation();
      studioPanel();
      charAnimation();
      titleAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });
  return (
    <Wrapper>
      <div>
        <BottomNavbar />
        <main>
          {/* hero area start */}
          <HeroBannerSix />
          {/* hero area end */}
          {/* marquee text */}
          <LineText />
          {/* marquee text */}

          {/* project area start */}
          <ProjectFour style_2={true} />
          {/* project area end */}

          {/* project area */}
          <ProjectTwo />
          {/* project area */}

          {/* portfolio area */}
          <PortfolioMasonryArea />
          {/* portfolio area */}

          <section className='tp-project-2-area'>
            <div className='panels-2 p-relative fix'>
              <div className='panels-container-2 d-flex align-items-center'>
                {/* panel one start */}
                <StudioPanelOne />
                {/* panel one end */}

                {/* panel two start */}
                <StudioPanelTwo />
                {/* panel two end */}

                {/* panel three start */}
                <StudioPanelThree />
                {/* panel three end */}

                {/* panel four start */}
                <StudioPanelFour />
                {/* panel four end */}

                {/* panel five start */}
                <StudioPanelFive />
                {/* panel five end */}
              </div>
            </div>
          </section>
          <br />
        </main>
      </div>
    </Wrapper>
  );
};
export default HomeIgnitax;

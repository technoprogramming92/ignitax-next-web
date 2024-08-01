"use client";

import {
  cursorAnimation,
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
} from "@/plugins";
import LineText from "@/components/line-text/line-text";
import ProjectFour from "@/components/project/project-four";

import Wrapper from "@/layouts/wrapper";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);
import { textInvert } from "@/utils/text-invert";
import {
  bounceAnimation,
  charAnimation,
  fadeAnimation,
  revelAnimationOne,
  titleAnimation,
} from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import { panelOneAnimation, studioPanel } from "@/utils/panel-animation";
import StudioPanelOne from "@/components/studio-panels/studio-panel-1";
import StudioPanelTwo from "@/components/studio-panels/studio-panel-2";
import StudioPanelThree from "@/components/studio-panels/studio-panel-3";
import StudioPanelFour from "@/components/studio-panels/studio-panel-4";
import StudioPanelFive from "@/components/studio-panels/studio-panel-5";
import PortfolioMasonryArea from "@/components/portfolio/portfolio-masonry-area";
import { hoverBtn } from "@/utils/hover-btn";
import HeroBannerSix from "@/components/hero-banner/hero-banner-six";
import { useEffect } from "react";
import BottomNavbar from "@/layouts/headers/BottomNavbar";
import PortfolioSliderHomeTwelve from "@/components/portfolio/slider/portfolio-slider-home-twelve";
import PortfolioSliderHomeEleven from "@/components/portfolio/slider/portfolio-slider-home-eleven";
import TeamOne from "@/components/team/team-one";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { videoAnimOne } from "@/utils/video-anim";
import ProjectTwo from "@/components/project/project-two";
import InstagramArea from "@/components/instagram/instagram-area";
import { instagramAnim } from "@/utils/instagram-anim";
import { awardAnimOne } from "@/utils/award-anim";

const HomeIgnitax = () => {
  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();
      bounceAnimation();
      teamMarqueAnim();
      revelAnimationOne();
      projectThreeAnimation();
      // ctaAnimation();
      textInvert();
      panelOneAnimation();
      studioPanel();
      charAnimation();
      titleAnimation();
      hoverBtn();
      fadeAnimation();
      charAnimation();
      awardAnimOne();
      instagramAnim();
      hoverBtn();
      // bounceAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <div>
        <BottomNavbar />
        <div id='magic-cursor'>
          <div id='ball'></div>
        </div>
        {/* hero area start */}
        <HeroBannerSix />
        {/* <PortfolioSliderHomeEleven /> */}
        {/* hero area end */}

        <div id='smooth-wrapper'>
          <div id='smooth-content'>
            <main>
              {/* portfolio slider start */}
              {/* <PortfolioSliderHomeEleven /> */}
              {/* portfolio slider end */}
              {/* marquee text */}
              <LineText />
              {/* marquee text */}

              {/* project area start */}
              <ProjectFour style_2={true} />
              {/* project area end */}
              {/* team area */}
              {/* <TeamOne /> */}
              {/* team area */}
              {/* portfolio slider start */}
              {/* <div style={{ marginBottom: "250px" }}>
                <PortfolioSliderHomeTwelve />
              </div> */}
              {/* project area */}
              <ProjectTwo />
              {/* project area */}

              {/* portfolio slider end */}
              {/* portfolio area */}
              <div>
                <PortfolioMasonryArea />
              </div>
              {/* portfolio area */}
              <div
                style={
                  {
                    // marginBottom: "510px",
                    //
                  }
                }
              >
                {/* instagram area */}
                <InstagramArea />
                {/* instagram area */}
              </div>

              <div style={{ marginTop: "220px" }}>
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
              </div>
            </main>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeIgnitax;

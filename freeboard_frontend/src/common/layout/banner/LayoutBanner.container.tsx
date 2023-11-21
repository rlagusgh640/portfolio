import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as LB from "./LayoutBanner.style";
export default function LayoutBannerUi() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <LB.Wrapper>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        <div>
          <LB.SliderItem src="/images/layout/202310.jpg" />
        </div>
        <div>
          <LB.SliderItem src="/images/layout/202310.jpg" />
        </div>
        <div>
          <LB.SliderItem src="/images/layout/202310.jpg" />
        </div>
      </Slider>
    </LB.Wrapper>
  );
}

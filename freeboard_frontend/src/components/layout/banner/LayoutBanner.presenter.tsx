import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner, AAA, BBB, CCC } from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; //
  return (
    <Banner>
      <Slider {...settings}>
        <AAA>
          <h3>carousel Design</h3>
          <p>
            캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
            <br />
            같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
            <br />
            각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
          </p>
        </AAA>
        <BBB>
          <h3>carousel Design</h3>
          <p>
            캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
            <br />
            같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
            <br />
            각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
          </p>
        </BBB>
        <CCC>
          <h3>carousel Design</h3>
          <p>
            캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
            <br />
            같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
            <br />
            각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
          </p>
        </CCC>
      </Slider>
    </Banner>
  );
}

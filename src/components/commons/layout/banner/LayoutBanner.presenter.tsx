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
          <h3>자유게시판</h3>
          <p>
            서로의 정보를
            <br />
            공유하세요.
          </p>
        </AAA>
        <BBB>
          <h3>중고마켓</h3>
          <p>
            생활용품
            <br />
            직거래 플랫폼
          </p>
        </BBB>
        <CCC>
          <h3>Market</h3>
          <p>
            이웃을 사랑하는
            <br />
            사람들의 중고마켓
          </p>
        </CCC>
      </Slider>
    </Banner>
  );
}

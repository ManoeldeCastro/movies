import Slider from 'react-slick'
import './carousel.css'

const Carousel = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    // slidesToShow: 350,
    slidesToScroll: 1,
  }


  return (
    <div>
      <Slider {...settings}>
          { children }
      </Slider>
    </div>
  )
}

export default Carousel

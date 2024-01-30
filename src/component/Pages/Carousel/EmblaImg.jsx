import image1 from "../../../../images/carousel1.jpg";
import image2 from "../../../../images/carousel2.jpg";
import image3 from "../../../../images/carousel3.jpg";
import image4 from "../../../../images/carousel4.jpg";
import image5 from "../../../../images/carousel.jpg";

export const images = [image1, image2, image3, image4, image5];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;

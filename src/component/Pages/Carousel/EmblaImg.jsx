import image1 from "../../../../images/digital1.png";
import image2 from "../../../../images/digital2.png";
import image3 from "../../../../images/digital3.png";
import image4 from "../../../../images/digital4.png";
import image5 from "../../../../images/digital5.png";

export const images = [image1, image2, image3, image4, image5];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;

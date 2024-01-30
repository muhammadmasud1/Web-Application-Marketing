import { MdOutlineShoppingCart } from "react-icons/md";

const CarouselContent = () => {
  return (
    <div>
      <h1>Education is Life</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam
        nisi eos accusantium eligendi velit deleniti nihil ad deserunt rerum
        incidunt.
      </p>
      <div>
        <div>
          <div>
            <MdOutlineShoppingCart></MdOutlineShoppingCart>
          </div>
          <div>
              <p>Ecommerce</p>
          </div>
        </div>
        <div>
          <div>
            <MdOutlineShoppingCart></MdOutlineShoppingCart>
          </div>
          <div>
              <p>Ecommerce</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;

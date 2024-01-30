import Banner from '../Banner/Banner';

import MainCarousel from './Carousel/MainCarousel';
import Featurepost from './Featurepost';
import TimeLine from './TimeLine';

const Home = () => {
              return (
                <>
                  <Banner></Banner>
                  <Featurepost></Featurepost>
                  <TimeLine></TimeLine>
                  <MainCarousel></MainCarousel>
                
                </>
              );
};

export default Home;
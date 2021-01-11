import React from 'react'
import Carousel from 'react-elastic-carousel'
import LCItem from './SubComponent/LandingCarouselItem'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './LCStyle.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

function LandingCarousel() {
    const thumbLink = "https://upload.wikimedia.org/wikipedia/commons/e/e2/OrteliusWorldMap1570.jpg"
    return (
        <>
            <div>
                <div>
                    <h1 style={{textAlign:"left"}}>Topik</h1>
                </div>

                <div className="App">
                    <Carousel breakPoints={breakPoints}>
                        <LCItem title="Sed ut perspiciatis" subTitle="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia." imgLink={thumbLink}/>
                        <LCItem title="Lorem ipsum dolor" subTitle="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." imgLink={thumbLink}/>
                        <LCItem title="Nemo enim ipsam" subTitle="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." imgLink={thumbLink}/>
                        <LCItem title="Lorem ipsum dolor" subTitle="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." imgLink={thumbLink}/>
                        <LCItem title="Sed ut perspiciatis" subTitle="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia." imgLink={thumbLink}/>
                        <LCItem title="Nemo enim ipsam" subTitle="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." imgLink={thumbLink}/>
                        
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default LandingCarousel;
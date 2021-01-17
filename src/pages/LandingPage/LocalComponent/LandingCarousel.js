import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import Card from './SubComponent/Card';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './LCStyle.css';



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



  
  function LandingCarousel() {
    // {REMOVED LATER}
    const longText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nibh augue, ut commodo libero venenatis ut. Vivamus faucibus lorem non laoreet volutpat. Aenean vitae est dignissim, vehicula nisi posuere."
    const thumbLink = "https://upload.wikimedia.org/wikipedia/commons/e/e2/OrteliusWorldMap1570.jpg";
    const coursesEndpoint = "http://127.0.0.1:5000/courses";

    // State(s)
    const [courses, setCourses] = useState([]);


    // Run ONCE
    useEffect(() => {
        axios.get(coursesEndpoint).then( res => {
            setCourses(res.data.data.course);
        }).catch(e => console.log(e))
    }, [])

    // Function(s)
    const getCards = () => {
        
        
        
        return(
            courses.map(course => (
                <Card key={Math.random(1000) * 1000} course={course} imgLink={thumbLink} longText={longText}/>
            ))
        )
    }



    // Component(s)
    const Courses = (
        <>
            <Carousel breakPoints={breakPoints}>
                
                {courses.length>0 ? 
                getCards()
                :
                <></>
                }
            </Carousel>
        </>
    )

    const NoCourses = (
        <></>
    )


    return (
        <>
            <div>
                <div className="container">
                    <h1 id="CarouselTitle">Topik</h1>
                </div>
                <div className="App">
                    {
                        (courses.length > 0) ? Courses : NoCourses
                    }
                </div>
            </div>
        </>
    )
}

export default LandingCarousel;
import React from 'react';
import CourseCard from '../course_card/CourseCard';
import Slider from "react-slick";
import styles from './CoursesSection.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CoursesSection = ({ profile, courses }) => {
    return (
        <div>
            <div className={ styles.profileContainer }>
                <img src={ profile.avatarUrl }
                className={ styles.profPic } alt={ "avatar" }></img>
                <div>
                    <h1>{ profile.name }</h1>
                    <p><small>{ profile.email }</small></p>
                </div>
            </div>
            <h2 className={ styles.myCourses }>My Courses</h2>
            <div className={ styles.coursesContainer }>
                <Slider
                arrows={true}
                dots={true}
                draggable={false}
                slidesToShow={3}
                slidesToScroll={3}
                responsive={[
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                    },
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                    }
                ]}
                >
                    {
                        courses.map((course) => {
                            return <CourseCard {...course} key={course.title}/>
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default CoursesSection;
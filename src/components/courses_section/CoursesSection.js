import React from 'react';
import CourseCard from '../course_card/CourseCard';
import Slider from "react-slick";
import styles from './CoursesSection.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CoursesSection = ({ courses }) => {
    return (
        <div>
            <h2 className={ styles.myCourses }>My Courses</h2>
            <div className={ styles.coursesContainer }>
                <Slider
                arrows={true}
                dots={true}
                draggable={false}
                slidesToShow={3}
                slidesToScroll={3}
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
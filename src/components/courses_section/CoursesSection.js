import React from 'react';
import CourseCard from '../course_card/CourseCard';
import styles from './CoursesSection.module.css';

const CoursesSection = ({ courses }) => {
    return (
        <div>
            <h2 className={ styles.myCourses }>My Courses</h2>
            <div className={ styles.coursesContainer }>
                {
                    courses.map((course) => {
                        return <CourseCard {...course}/>
                    })
                }
            </div>
        </div>
    )
}

export default CoursesSection;
import React from 'react';
import CourseCard from '../course_card/CourseCard';
import styles from './CoursesSection.module.css';
import Carousel, { consts } from 'react-elastic-carousel';

function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? (
        <svg
          transform="rotate(180)"
          width={64}
          height={90}
          viewBox="0 0 64 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M62.243 49.243a6 6 0 000-8.486L24.059 2.574a6 6 0 00-8.485 8.485L49.514 45l-33.94 33.941a6 6 0 108.485 8.485l38.184-38.183zM0 51h58V39H0v12z"
            fill="#E5E5E5"
          />
        </svg>
      ) :
      (    <svg
        width={64}
        height={90}
        viewBox="0 0 64 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.243 49.243a6 6 0 000-8.486L24.059 2.574a6 6 0 00-8.485 8.485L49.514 45l-33.94 33.941a6 6 0 108.485 8.485l38.184-38.183zM0 51h58V39H0v12z"
          fill="#E5E5E5"
        />
      </svg>)
    if (isEdge) {
        return (
            <div></div>
        )
    } else {
        return (
            <button onClick={onClick} disabled={isEdge} className={ styles.carouselButton }>
              {pointer}
            </button>
          )
    }
}

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
                <Carousel
                itemsToShow={ 3 }
                pagination={ false }
                renderArrow={ myArrow }
                breakPoints={[
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]}>
                    {
                        courses.map((course) => {
                            return <CourseCard {...course} key={course.title}/>
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default CoursesSection;
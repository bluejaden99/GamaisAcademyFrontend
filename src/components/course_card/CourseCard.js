import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = (course) => {
    return (
        <div className={ styles.card }>
            <div className={ styles.cardImgCont }>
                <img className={ styles.courseImg } src={ course.course.image } alt="logo" />
            </div>
            <p className={ styles.cardTitle }>{ course.course.judul }</p>
            <p className={ styles.cardDesc }>{ course.course.desc }</p>
            <a href={ `/course/${ course.course._id }` }><button className={ styles.cardButton }>Watch</button></a>
        </div>
    );
}

export default CourseCard;

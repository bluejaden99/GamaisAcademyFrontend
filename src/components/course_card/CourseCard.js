import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({ image, title, description, courseUrl }) => {
    return (
        <div className={ styles.card }>
            <div className={ styles.cardImgCont }>
                <img className={ styles.courseImg } src={ image } alt="logo" />
            </div>
            <p className={ styles.cardTitle }>{ title }</p>
            <p className={ styles.cardDesc }>{ description }</p>
            <a href={ courseUrl }><button className={ styles.cardButton }>Watch</button></a>
        </div>
    );
}

export default CourseCard;
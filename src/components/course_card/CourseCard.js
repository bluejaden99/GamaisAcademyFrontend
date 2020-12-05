import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({ image, title, description }) => {
    return (
        <div className={ styles.card }>
            <div className={ styles.cardImgCont }>
                <img className={ styles.courseImg } src={ image } alt="logo" />
            </div>
            <p className={ styles.cardTitle }>{ title }</p>
            <p className={ styles.cardDesc }>{ description }</p>
            <button className={ styles.cardButton }>Watch</button>
        </div>
    );
}

export default CourseCard;
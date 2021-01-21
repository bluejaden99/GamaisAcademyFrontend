import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({ image, judul, desc, _id }) => {
    return (
        <div className={ styles.card }>
            <div className={ styles.cardImgCont }>
                <img className={ styles.courseImg } src={ image } alt="logo" />
            </div>
            <p className={ styles.cardTitle }>{ judul }</p>
            <p className={ styles.cardDesc }>{ desc }</p>
            <a href={ `/course/${ _id }` }><button className={ styles.cardButton }>Watch</button></a>
        </div>
    );
}

export default CourseCard;

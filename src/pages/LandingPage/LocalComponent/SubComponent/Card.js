import React from 'react';
import './CardStyle.css';

const Card = function ({ course, imgLink, longText }) {
    // Javascript Here
    const getTitle = () => {
        const rawTitle = course.judul;
        const maxChar = 30;
        if (rawTitle.length > maxChar){
            return rawTitle.substring(0, maxChar-9) + " ... " + rawTitle.substring(rawTitle.length-4, rawTitle.length)
        }
        return rawTitle
    }
    const getDescription = () => {
        const rawDesc = course.desc;
        const maxChar = 100;
        if (rawDesc.length > maxChar){
            return rawDesc.substring(0, maxChar-3) + "..."
        }
        return rawDesc
    }

    const Title = getTitle();
    const Description = getDescription();
    const url = "/enrollment/" + course._id

    // JSX Here
    return(
        <>
            <div id="Card">
                <img id="CardThumbnail"  src={imgLink} alt="video-thumbnail"/>
                <br/>
                <div id="TitleHolder">
                    <h4 id="CardTitle">{Title}</h4>
                </div>
                <hr id="card-line"></hr>
                <div id="DescriptionHolder">
                    <h5 id="CardDescription">{Description}</h5>
                </div>
                <div id="ButtonHolder">
                    <a href={url} className="btn more-btn">Read More</a>
                </div>
            </div>
        </>
    )
}

export default Card;
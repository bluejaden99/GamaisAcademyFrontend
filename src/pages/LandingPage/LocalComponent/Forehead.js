import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './ForeheadStyle.css'
import bannerImage from '../../../assets/img/BannerGamaisAcademy.jpg'

function Forehead() {

    return (
        <>
           {/* Jumbotron */}
           <div className="jumbotron jumbotron-fluid" id="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className = "col-md-8" style={{textAlign:"left", fontWeight:"bold", paddingBottom:"25px"}}>
                            <strong>
                            <h1 className="display-4">Gamais Academy</h1>
                            </strong>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                            <button type="button" id="btn-register" className="btn">Register</button>
                        </div>
                        <div className="col-md-4">
                            <img className="bannerImage shadowedContent" src={bannerImage} style={{width:"100%"}} alt="Gamais Academy Banner"></img>
                            {/* <div className="shadowedContent">
                            </div> */}
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Forehead;
import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './ForeheadStyle.css'
import bannerImage from '../../../assets/img/Banner.png'
import RegisterButton from './SubComponent/RegisterButton'
import { useAuth } from '../../../contexts/AuthContext';

function Forehead() {

    //  Login Conditional
    const { currentUser } = useAuth();

    return (
        <>
            {/* Jumbotron */}
            <div className="jumbotron jumbotron-fluid" id="jumbotron">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-7" style={{ textAlign: "left", fontWeight: "bold", paddingBottom: "25px" }}>

                            {/* TITLE */}
                            <h1 id="title" className="display- 4">Gamais Academy</h1>

                            {/* SUBTITLE */}
                            <p id="subtitle" className="lead">Platform pembelajaran online materi-materi keislaman dengan kurikulum yang terstruktur, runtut, dan terpercaya.</p>

                            {/* REGISTER BUTTON */}
                            {currentUser ? <></> : <RegisterButton text='Register' />}

                        </div>

                        <div id="banner-area" className="col-lg-5">

                            {/* BANNER IMAGE */}
                            <img className="bannerImage shadowedContent" src={bannerImage} alt="Gamais Academy Banner"></img>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Forehead;
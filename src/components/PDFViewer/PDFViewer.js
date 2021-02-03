import React from 'react';
import './PDFViewer.css';

const PDFViewer = ({ link }) => {
    
    return (  
        <div className="pdf-container">
            <iframe className="pdf" src={link+"#FitH"} />
        </div>
    );
}
 
export default PDFViewer;
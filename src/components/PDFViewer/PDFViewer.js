import React, { useEffect, useState } from 'react';
import './PDFViewer.css';

const PDFViewer = ({ documentName }) => {
    const [documentUrl, setDocumentUrl] = useState('');

    useEffect(() => {
        setDocumentUrl("https://drive.google.com/file/d/11bTXx0xnvj1n-DGoybMdVDuP4FrBIGTb/preview")

    }, []);

    
    return (  
        <div>
            <iframe className="pdf" src={documentUrl+"#FitH"} />
        </div>
    );
}
 
export default PDFViewer;
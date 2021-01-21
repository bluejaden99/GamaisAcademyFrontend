import React, { useEffect, useState } from 'react';
import './PDFViewer.css';

const PDFViewer = ({ link }) => {
    const [documentUrl, setDocumentUrl] = useState('');

    useEffect(() => {
        // const linkDoc = link;
        const linkDoc = "https://drive.google.com/file/d/11bTXx0xnvj1n-DGoybMdVDuP4FrBIGTb/preview";
        setDocumentUrl(linkDoc);

    }, []);

    
    return (  
        <div>
            <iframe className="pdf" src={documentUrl+"#FitH"} />
        </div>
    );
}
 
export default PDFViewer;
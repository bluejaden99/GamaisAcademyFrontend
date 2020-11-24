import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { firebase } from '../config/env';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ documentName }) => {
    const [documentUrl, setDocumentUrl] = useState('');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const path = 'document/' + documentName;
        let imageRef = firebase.storage().ref(path);
        imageRef
            .getDownloadURL()
            .then((url) => {
                console.log(url);
                setDocumentUrl(url);
            })
            .catch((e) => console.log('getting downloadURL of image error => ', e));
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    return (  
        <div>
            <Document file={documentUrl} 
            onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}
 
export default PDFViewer;
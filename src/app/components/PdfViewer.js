'use client'
import proteanCorporateDeck from '../../../public/proteanCorporateDeck.pdf';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { useCallback, useEffect, useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import leftArrow from '../../../public/svgs/left.svg';
import rightArrow from '../../../public/svgs/right.svg';
import Image from 'next/image';

import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const resizeObserverOptions = {};

function PdfViewer() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [containerRef, setContainerRef] = useState(null);
    const [containerWidth, setContainerWidth] = useState();

    const onResize = useCallback((entries) => {
        const [entry] = entries;


        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const goToPreviousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const goToNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    return (
        <>
            <div className='documentContanier' ref={setContainerRef}>
                <Document file={proteanCorporateDeck} onLoadSuccess={onDocumentLoadSuccess} >
                    <Page pageNumber={pageNumber}
                        width={containerWidth}
                    />
                </Document>
            </div>
            <Image style={{opacity: 0, pointerEvents: 'none', width: 0.01}} src={leftArrow} alt='left button' />
            <div className='slideControl absolute bottom-0 left-0 translate-y-[150%]'>        
                <button onClick={goToPreviousPage}>
                    <Image src={leftArrow} alt='left button' />
                </button>
                <button onClick={goToNextPage}>
                    <Image src={rightArrow} alt='right button' />
                </button>
            </div>
        </>
    )
}

export default PdfViewer
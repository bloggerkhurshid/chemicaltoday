// src/pages/PdfViewer/PdfViewer.js
import React from 'react';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../PdfViewer/PdfViewer.css'; // Import your CSS file
import { useParams } from 'react-router-dom';

const PdfViewer = () => {
    const { year,folder, file} =useParams()
    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;

    const s3FileUrl = `https://chemicaltodaywebsiet.s3.amazonaws.com/${year}/${folder}/${file}.pdf`; // Your S3 bucket URL

    return (
        <div style={{ height: '750px', position: 'relative' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
                <div className="controls">
                    <ZoomOutButton />
                    <ZoomInButton />
                    <ZoomPopover />
                </div>
                <Viewer
                    fileUrl={s3FileUrl} // Use the S3 bucket URL here
                    plugins={[zoomPluginInstance, getFilePluginInstance]}
                    defaultScale={SpecialZoomLevel.PageFit}
                />
            </Worker>
        </div>
    );
};

export default PdfViewer;




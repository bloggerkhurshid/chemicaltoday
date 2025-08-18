// src/pages/PdfViewer/PdfViewer.js
import React from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./PdfViewer.css"; // Import your CSS file

const PdfViewer = ({ file }) => {
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;

  return (
    <div style={{ height: "750px", position: "relative" }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}
      >
        <div className="controls">
          <ZoomOutButton />
          <ZoomInButton />
          <ZoomPopover />
          <DownloadButton />
        </div>
        <Viewer
          fileUrl={file}
          plugins={[zoomPluginInstance, getFilePluginInstance]}
          defaultScale={SpecialZoomLevel.PageFit}
        />
      </Worker>
    </div>
  );
};

export default PdfViewer;

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";

const ImageFlipBook = () => {
  const { folderName } = useParams();
  const book = useRef();
  const [pages, setPages] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(1); // Starting zoom level

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom * 1.2, 3)); // Increase zoom level by 20%, max at 3x
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom / 1.2, 1)); // Decrease zoom level by 20%, min at 1x
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const indexData = await import(
          `../../assets/magazines/${folderName}/index.json`
        );
        const images = [];
        for (let i = 1; i <= indexData.totalFiles; i++) {
          const image = await import(
            `../../assets/magazines/${folderName}/page_${i}.png`
          );
          images.push(image.default);
        }
        setPages(images);
      } catch (error) {
        console.error("Error loading images: ", error);
      }
    };

    loadImages();
  }, [folderName]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#085EAB", margin: "0 20px" }}>
          Welcome to Chemical Today E-magazine
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          minHeight: "100vh",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            height: "auto",
            overflow: "auto",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "auto",
              position: "relative",
            }}
          >
            <HTMLFlipBook
              width={Math.min(400, window.innerWidth - 100) * zoomLevel}
              height={Math.min(500, window.innerHeight - 100) * zoomLevel}
              ref={book}
              style={{ zoom: zoomLevel }}
            >
              {pages.map((page, index) => (
                <div className="page" key={index}>
                  <img
                    src={page}
                    alt={`Page ${index + 1}`}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
          }}
        >
          <span
            onClick={zoomIn}
            style={{ cursor: "pointer", fontSize: "24px" }}
          >
            <i className="material-icons">zoom_in</i>
          </span>
          <span
            onClick={zoomOut}
            style={{ cursor: "pointer", fontSize: "24px" }}
          >
            <i className="material-icons">zoom_out</i>
          </span>
        </div>
      </div>
      <h1 style={{ color: "#085EAB", textAlign: "center" }}>{folderName}</h1>
    </div>
  );
};

export default ImageFlipBook;

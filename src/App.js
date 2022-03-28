import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ImageDetails from "./ImageDetails";
import { fetchData } from "./api";
import "./App.css";

export function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async function fetchAPI() {
      try {
        const response = await fetchData();
        const array = response.data.hits.slice();
        const chunks = [];
        while (array.length) chunks.push(array.splice(0, 3));
        setImages(chunks);
        setError(false);
      } catch (err) {
        setError(true);
      }
    })();
    fetchData();
  }, []);
  return (
    <div className="container">
      {error && <p>An error occurred while fetching data</p>}
      {images.length > 0 && (
        <div className="images-div">
          {images.map((row, i) => (
            <div key={i} className="row mt-2 image-row">
              {row.map((col, idx) => (
                <div key={i * 3 + idx} className="col image-container">
                  <Link to="/item-details" state={col}>
                    <img
                      className="image"
                      src={col.imageURL}
                      alt={col.tags}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/item-details" element={<ImageDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

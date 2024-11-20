import React, { useState, useEffect } from "react";

function ImagesFor({ personId }) {
    const [images, setImages] = useState([]); // State til billeder
    const API_KEY = "dc2102131c828ea5b7aaacb5086c322f"; // TMDB API-nøgle
    const BASE_URL = "https://image.tmdb.org/t/p/w200"; // Base URL for billeder

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/person/${personId}/images?api_key=${API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Logger billeder for debugging
                setImages(data.profiles || []); // Gemmer billeder i state
            })
            .catch((error) => console.error("Fejl ved billedhentning:", error));
    }, [personId]); // Kør igen, hvis personId ændrer sig

    return (
        <div>
            <h3>Images:</h3>
            {images.length > 0 ? (
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={`${BASE_URL}${image.file_path}`} // Genererer URL for billedet
                            alt="Profile"
                            style={{ width: "100px", height: "auto" }}
                        />
                    ))}
                </div>
            ) : (
                <p>No images available.</p> // Hvis ingen billeder findes
            )}
        </div>
    );
}

export default ImagesFor;

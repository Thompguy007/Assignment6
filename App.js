import React, { useState, useEffect } from "react"; // importerer React og hooks
import Person from "./Person"; // Importer Person-komponenten

function App() {
    const [persons, setPersons] = useState([]); // State til at gemme listen af personer
    const [currentIndex, setCurrentIndex] = useState(0); // State til at holde styr p� den aktuelt viste person
    const API_KEY = "dc2102131c828ea5b7aaacb5086c322f"; // TMDB API-n�gle
    const QUERY = "spielberg"; // Harcoded s�geforesp�rgsel

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/search/person?query=${QUERY}&api_key=${API_KEY}`; // API URL
        fetch(url)
            .then((response) => response.json()) // Konverterer API-responsen til JSON
            .then((data) => { 
                console.log(data); // Logger data for debugging
                setPersons(data.results || []); // Opdaterer state med hentede personer
            })
            .catch((error) => console.error("Fejl ved API-kald:", error)); // Logger fejl
    }, []); // K�rer kun en gang ved f�rste render

    const nextPerson = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, persons.length - 1)); // G� frem (stop ved sidste person)
    }

    const prevPerson = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // G� tilbage (stop ved f�rste person)
    }

    return (
        <div>
            <h1>TMDB Persons</h1>
            {persons.length > 0 ? (
                <>
                <Person person={persons[currentIndex]} />
                    <button onClick={prevPerson} disabled={currentIndex === 0}>
                        forrige
                    </button>
                    <button onClick={nextPerson} disabled={currentIndex === persons.length - 1}>
                        N�ste
                    </button>
                </>
            ) : (
                <p>Ingen personer fundet.</p> // vises, hvis listen er tom
            )}
        </div>
    );
}

export default App; // Eksporterer App-komponenten

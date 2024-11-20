import KnownFor from "./KnownFor"; // Importerer KnownFor-komponenten
import ImagesFor from "./ImagesFor"; // Importerer ImagesFor-komponenten

function Person({ person }) {
    return (
        <div>
            <h2>{person.name}</h2>
            <p>Department: {person.known_for_department}</p>
            <KnownFor knownFor={person.known_for} /> {/* Viser "known_for" data */}
            <ImagesFor personId={person.id} /> {/* Viser billeder baseret på personens ID */}
        </div>
    );
}

export default Person;

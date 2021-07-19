import peliculas from "./peliculas.json";

export function PeliculasGrid() {
    return (
        <ul>
            {peliculas.map((pelicula) => (
                 <li>{pelicula.title}</li>
            ))}
        </ul>
    );
}
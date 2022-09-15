import {
  Link
} from "react-router-dom";

function Movie({id,medium_cover_image,title,summary,genres}) {
    return (
        <div>
          <img src={medium_cover_image}></img>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
          <ul>
            {genres.map((g)=> (<li key={g}>{g}</li>))}
          </ul>
          </div>
    );
}

export default Movie;
export default function Top5Movie({ movieData }) {
  const releaseDate = movieData.release_date;
  const year = new Date(releaseDate).getFullYear();
  const vote = movieData.vote_average;
  return (
    <div className='top-5' 
    style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData?.backdrop_path})`}}>
        
        <div className="details">
          <p style={{fontSize: '15px'}}>{movieData.title}</p>
          <p style={{fontSize: '12px'}}>{year}</p>
        </div>

        <div className="rating">
        ⭐ {vote.toFixed(1)} 
        </div>


        </div>
    );
}
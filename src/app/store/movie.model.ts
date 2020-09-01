export interface Movie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

export interface MovieResponse {
    Search: Movie[];
    totalResults: number;
    Response: boolean;
}

export interface MovieDetailResponse {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: [
      {
        Source: string;
        Value: string;
      },
      {
        Source: string;
        Value: string;
      },
      {
        Source: string;
        Value: string;
      }
    ]
    Metascore: number;
    imdbRating: number;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: boolean;
  }



import Banner from "../components/Banner";
import MoviesSec from "../components/MoviesSec";

export default function Home() {
  return (
    <>
    <Banner tab="home"/>
    <MoviesSec title="New Releases"/>
    <br />
    <MoviesSec title="Continue Watching"/>
    <br />
    <MoviesSec title="Trending Now"/>
    </>
  )
}

import React from 'react'
import { Link } from 'gatsby'
import CommentCarousel from "./CommentCarousel"
import useFetch from "react-fetch-hook";

const Velemenyek = (props) => {
  const {isLoading, data} = useFetch("https://sztannabackend.pjatacsuk.now.sh/api/comment.js")
  console.log(data)
  console.log(isLoading)
  return <section id="velemenyek" className="main special">
    <header className="major">
      <h2>Rólunk írták</h2>
    </header>

    {isLoading || !data ? <div/> : <CommentCarousel comments={data.comments}/> }
    <footer className="major">
      <ul className="actions">
        <li><Link to="/comment" className="button">Irjon ön is</Link></li>
      </ul>
    </footer>
  </section>
}
export default Velemenyek

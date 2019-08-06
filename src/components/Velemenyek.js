import React from 'react'
import { Link } from 'gatsby'
import CommentCarousel from './CommentCarousel'
import useFetch from 'react-fetch-hook'
import { FormattedMessage } from 'react-intl'

const Velemenyek = props => {
  const { isLoading, data } = useFetch(
    'https://sztannabackend.pjatacsuk.now.sh/api/comment.js'
  )
  return (
    <section id="velemenyek" className="main special">
      <header className="major">
        <h2>
          <FormattedMessage id={'commentsTitle'} />
        </h2>
      </header>

      {isLoading || !data ? (
        <div />
      ) : (
        <CommentCarousel comments={data.comments} />
      )}
      <footer className="major">
        <ul className="actions">
          <li>
            <Link to="/comment" className="button">
              Irjon ön is
            </Link>
          </li>
        </ul>
      </footer>
    </section>
  )
}
export default Velemenyek

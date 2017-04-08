import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"

import styles from "./index.css"

const PagePreview = ({ __url, title, date, description, thumbnail }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={ styles.wrapper }>
      <Link to={ __url } className={ styles.title }>
        { title }
      </Link>
      <div className={ styles.meta }>
        {
          pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
        }
      </div>
      <div className={ styles.description }>
        { description }
        { " " }
      </div>
      <Link to={ __url } className={ styles.readMore }>
        <Button primary>{ "Read More →" }</Button>
      </Link>
      <div className={ styles.blogItem }>
        <Link to={ __url } className={ styles.thumbnail }>
          <img src={thumbnail} title="" height="640" width="480" />
        </Link>
      </div>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string.isRequired
}

export default PagePreview

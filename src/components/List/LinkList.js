import React from 'react'
import { Link } from '@material-ui/core'

function LinkList({ link, next }) {
  
  return next ? (
    <Link href='#' color='inherit'>
      {link.split('\\n').map((str, i) => (
        <span key={i}>
          {str}
          <br />
        </span>
      ))}
    </Link>
  ) : (
    <Link href='#' color='inherit'>
      {link}
    </Link>
  )
}

export default LinkList

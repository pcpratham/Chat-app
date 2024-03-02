import React from 'react'
import {Helmet} from "react-helmet-async";


const Title = ({
    title = "Chat App",
    description = "this is a chat app"
}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='desctiption' content={description} />
    </Helmet>
  )
}

export default Title
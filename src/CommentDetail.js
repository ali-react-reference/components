import React from 'react'

// props is received as the first argument for the component
// it is an object that contains all of the properties that are passed to the child component
const CommentDetail = (props)=>{ 
    // console.log(props) 
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img src={props.imageSrc} alt="avatar " />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">
              {props.time}
            </span>
          </div>
          <div className="text">{props.comment}</div>
        </div>
      </div>
    )
}

export default CommentDetail;
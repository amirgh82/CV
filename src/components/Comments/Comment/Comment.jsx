import React from 'react'
import './Comment.css'
export default function Comment(props) {
    return (
        <div className="comment">
            <p className="comment-description">" به نظر می رسد که تنها تکه هایی از متن اصلی در متن لورم اپیسوم که امروزه استفاده می شود باقی مانده است. "</p>
            <h5 className="comment-writer">-{props.writer}</h5>
        </div>
    )
}

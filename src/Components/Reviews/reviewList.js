import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { getReviews } from "./review"

export const ReviewList = () => {
    const [reviews, updateReview] = useState({})
    const history = useHistory()

    const fetchReviews = () => {
        getReviews()
            .then(data => updateReview(data))
    }
    useEffect(() => {
        fetchReviews()
    }, [])

    return (
        <article className="reviews">
            {
                reviews.map(review => {
                    return <section key={`review--${review.id}`} className="review"></section>
                })
            }
        </article>
    )

}
export const fetchReviews = (businessId) => (
    $.ajax({
        url: `/api/businesses/${businessId}/reviews`,
    })
)

export const fetchReview = (reviewId) => (
    $.ajax({
        url: `/api/reviews/${reviewId}`
    })
)

export const createReview = (review) => (
    $.ajax({
        method: 'POST',
        url: `/api/reviews/`,
        data: {review}
    })
)

export const updateReview = (review) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: {review}
    })
)
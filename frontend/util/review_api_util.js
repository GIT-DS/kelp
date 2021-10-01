export const fetchReviews = (businessId) => (
    $.ajax({
        url: `/api/businesses/${businessId}/reviews`,
    })
)

export const fetchReview = (businessId, reviewId) => (
    $.ajax({
        url: `/api/businesses/${businessId}/reviews/${reviewId}`
    })
)

export const createReview = (businessId, review) => (
    $.ajax({
        method: 'POST',
        url: `/api/businesses/${businessId}/reviews/`,
        data: {review}
    })
)

export const updateReview = (businessId, review) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/businesses/${businessId}/reviews/${review.id}`,
        data: {review}
    })
)
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
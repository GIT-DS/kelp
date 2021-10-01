json.extract! review, :id, :rating, :comment, :user_id, :business_id, :created_at
businessTitle = review.business.title
json.businessTitle businessTitle
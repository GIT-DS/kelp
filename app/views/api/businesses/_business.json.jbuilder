json.extract! business, :id, :title, :phone_num, :time_open, :time_close, :cost, :address, :state, :city, :zip_code, :longitude, :latitude

sum = 0
business.reviews.each do |review|
    sum += review.rating
end
averageRating = sum/business.reviews.length
json.averageRating averageRating

firstComment = business.reviews.first.comment

json.sampleComment firstComment

json.photosUrl business.photos.map {|file| url_for(file)}
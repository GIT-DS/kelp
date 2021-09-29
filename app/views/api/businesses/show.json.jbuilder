json.partial! '/api/businesses/business', business: @business   
@business.photos.map do |photo|
    json.photoUrl url_for(photo)    
end
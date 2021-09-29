@businesses.each do |business|
    json.set! business.id do
        json.partial! '/api/businesses/business', business: business
    end
    business.photos.map do |photo|
        json.photoUrl url_for(photo)    
    end
end
json.extract! business, :id, :title, :phone_num, :time_open, :time_close, :cost, :address, :state, :city, :zip_code, :longitude, :latitude
json.photosUrl business.photos.map {|file| url_for(file)}
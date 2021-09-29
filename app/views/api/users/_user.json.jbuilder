json.extract! user, :username, :id, :first_name, :last_name, :zip_code
json.photoUrl url_for(user.photo)
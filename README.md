# Thanks for viewing Kelp!
Kelp is a seafood based business information and review website.

# [Live](https://kelp-yelp-clone.herokuapp.com/)

# Techonologies

### Backend
+ Ruby on Rails

### Front-end
+ React and Redux

### Database
+ PostgreSQL

### Web design and styling
+ HTML & CSS

### Image Hosting
+ Amazon S3

### Map
+ Google Maps API

# Highlights

## User Authentication
+ Users can signup for an account and login (or use the demo-login button provided). 
+ Errors are styled and do not persist


![User Error Handling](https://user-images.githubusercontent.com/39077702/136592752-f872d174-f455-446a-be90-39724100c003.gif "User Error Handling")

## Create/ Edit Delete Reviews
+ Users must be logged in to be able to create, edit, or delete reviews.
+ Custom Rating Bar that highlights previous rating (if editing) and keeps track of current rating.
+ Error handling to show rating and review must be provided for a valid submission.

![Review Demo](https://user-images.githubusercontent.com/39077702/136593651-e299954e-2abc-464b-8d3e-b31f49273269.gif "Review Demo")

## Business Index
+ Shows a list of Businesses with their location on a map, average rating, categories, a sample comment, and a link to their show page

![Business Index](https://user-images.githubusercontent.com/39077702/136594365-c8f67eba-9926-4af6-9b4f-b65f58b59aac.png "Business Index Demo")

## Business Show
+ Shows the business's information including their:
  +  Business name
  +  Business Cost
  +  Business Categories (clickable)
  +  Time open/close (along with whether they're currently open or not)
  +  Map centered on their longitude and latitude
  +  Address, a long with a get directions link
  +  Phone number
  +  Reviews. If the current logged in user previously left a review, they have the option to edit their review.

![Business Show Demo](https://user-images.githubusercontent.com/39077702/136595172-dfa4bacd-3839-42f9-a874-f7d7d071bb59.png "Business Show Demo")

When I first started this MVP, i had no idea how much information actually goes into a show page. I had to grab various pieces of information from the business, the reviews, and the users, all of which are on different tables of my database. Additionally, I had to contend with image hosting on amazon S3 for the first time. I was able to successfully gather all this information by abstracting out components and pulling information needed through jbuilder.

```ruby
json.extract! business, :id, :title, :phone_num, :time_open, :time_close, :cost, :address, :state, :city, :zip_code, :longitude, :latitude

categories = []
business.categories.each do |cat|
    categories.push(cat.title)
end
json.categories categories

json.photosUrl business.photos.map {|file| url_for(file)}
```

## Search
+ Users can search for Businesses based on their location, title, or category

![Search Demo](https://user-images.githubusercontent.com/39077702/136597018-a4d38359-79fb-4ec5-8eba-f2149ae08134.gif "Search Demo")

This functionality was pretty challenging. I was able to accomplish this via comparing the query string to the various associations and columns of my businesses.

```javascript
    filter(find, near){
        let businesses = this.props.businesses
        let findArr = [];
        if (this.props.find === '0' && this.props.near === '0') findArr = businesses
        if (this.props.find && this.props.near) {
            if (find !== '0'){
                let title = (businesses.filter(business => this.includes(business.title, find)))
                let category = businesses.filter(business => business.categories.some(cat => this.includes(cat, find)))
                findArr = findArr.concat(title, category)
            }
            if (near !== '0'){ 
                if (find === '0') {
                    findArr = businesses.filter(business => 
                        this.includes(business.address, near) 
                        || this.includes(business.state, near)
                        || this.includes(business.city, near) 
                        || this.includes(business.zipCode, near)
                    )
                } else {
                    findArr = findArr.filter(business => 
                        this.includes(business.address, near) 
                        || this.includes(business.state, near) 
                        || this.includes(business.city, near) 
                        || this.includes(business.zipCode, near)
                    )
                }
            } 
        }
        this.setState({b: findArr})
    }
 ```

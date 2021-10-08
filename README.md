# Thanks for viewing Kelp!
Kelp is a seafood based business information and review website.

# Website
https://kelp-yelp-clone.herokuapp.com/

# Techonologies

## Backend
+ Ruby on Rails

## Front-end
+ React and Redux

## Database
+ PostgreSQL

## Web design and styling
+ HTML & CSS

## Image Hosting
+ Amazon S3

## Map
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


## Search
+ Users can search for Businesses based on their location, title, or category

![Search Demo](https://user-images.githubusercontent.com/39077702/136597018-a4d38359-79fb-4ec5-8eba-f2149ae08134.gif "Search Demo")

This functionality was pretty challenging. I was able to accomplish this via comparing the query string to various columns in my schema.

![Filter Algorithm Demo](https://user-images.githubusercontent.com/39077702/136597625-038de8d4-e1f4-4d2f-b99f-0055e095a2bd.png "Filter Algorithm Demo")

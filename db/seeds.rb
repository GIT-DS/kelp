# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Business.destroy_all
Review.destroy_all

#User Seeds
user1 = User.create!({
    username:"alpha",
    password:"alpha",
    email:"alpha.io",
    first_name: 'al',
    last_name: 'pha',
    zip_code: 10001
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/darrick.jpeg')
user1.photo.attach(io: file, filename: 'darrick.jpeg')

user2 = User.create!({
    username:"bravo",
    password:"bravo",
    email:"bravo.io",
    first_name: 'bra',
    last_name: 'vo',
    zip_code: 10002
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/jimmy.jpeg')
user2.photo.attach(io: file, filename: 'jimmy.jpeg')

user3 = User.create!({
    username:"charlie",
    password:"charlie",
    email:"charlie.io",
    first_name: 'char',
    last_name: 'lie',
    zip_code: 10003
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/david.jpeg')
user3.photo.attach(io: file, filename: 'david.jpeg')

user4 = User.create!({
    username:"delta",
    password:"delta",
    email:"delta.io",
    first_name: 'del',
    last_name: 'ta',
    zip_code: 10004
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/ian.jpeg')
user4.photo.attach(io: file, filename: 'ian.jpeg')


user5 = User.create!({
    username:"echo",
    password:"echo",
    email:"echo.io",
    first_name: 'ec',
    last_name: 'ho',
    zip_code: 10005
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/mike.jpeg')
user5.photo.attach(io: file, filename: 'mike.jpeg')


user6 = User.create!({
    username:"foxtrot",
    password:"foxtrot",
    email:"foxtrot.io",
    first_name: 'fox',
    last_name: 'trot',
    zip_code: 10006
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/vincent.png')
user6.photo.attach(io: file, filename: 'vincent.png')

# Business Seeds

business1 = Business.create!({
    title: 'Hop Li Seafood Restaurant',
    phone_num: '(213) 680-3939',
    time_open: '09:00 AM PST',
    time_close: '07:00 PM PST',
    website: '',
    cost: '$$',
    address: '526 Alpine St.',
    city: 'Los Angeles',
    state: 'CA',
    zip_code: '90012',
    longitude: 34.067347503798935, 
    latitude: -118.2408155940718
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/restaurants/rockin/o.jpg')
business1.photos.attach([{io: file, filename: 'o.jpg'}])

business2 = Business.create!({
    title: "Rock'N Fish Restaurant",
    phone_num: '(213) 536-5020',
    time_open: '10:30 AM PST',
    time_close: '07:00 PM PST',
    website: '',
    cost: '$$$',
    address: '800 W. Olympic Blvd A-160',
    city: 'Los Angeles',
    state: 'CA',
    zip_code: '90015',
    longitude: 34.0462312861572, 
    latitude: -118.26394516974035, 
})









#Review Seeds

review1 = Review.create!({
    rating: 2,
    comment: "I didn't have a good experience here",
    user_id: user1.id,
    business_id: business1.id
})

review2 = Review.create!({
    rating: 5,
    comment: 'This place is amazing!',
    user_id: user1.id,
    business_id: business2.id 
})
# review3 = Review.create!({
#     rating: 4,
#     comment: 'The ambience is just right',
#     user_id: user2.id,
#     business_id: business3.id 
# })
# review4 = Review.create!({
#     rating: 3,
#     comment: 'Not too great, not too bad',
#     user_id: user2.id,
#     business_id: business4.id
# })
# review5 = Review.create!({
#     rating: 1,
#     comment: "I'm angry and you should be too",
#     user_id: user3.id,
#     business_id: business5.id 
# })
# review6 = Review.create!({
#     rating: 1,
#     comment: "I really dislike the staff here",
#     user_id: user3.id,
#     business_id: business6.id 
# })
review7 = Review.create!({
    rating: 5,
    comment: "Just here for the freebies",
    user_id: user4.id,
    business_id: business1.id 
})
review8 = Review.create!({
    rating: 1,
    comment: "THIS PLACE DOESN'T SELL ROCKS AT ALL!",
    user_id: user4.id,
    business_id: business2.id
})
# review9 = Review.create!({
#     rating: 3,
#     comment: "I'm a middle of road kind of guy",
#     user_id: user5.id,
#     business_id: business3.id 
# })

# review10 = Review.create!({
#     rating: 4,
#     comment: "Slightly better than expected",
#     user_id: user5.id,
#     business_id: business4.id 
# })

# review11 = Review.create!({
#     rating: 5,
#     comment: "Great Fantastic Love it",
#     user_id: user6.id,
#     business_id: business5.id 
# })

# review12 = Review.create!({
#     rating: 1,
#     comment: "The entire kitchen and wait staff saw an ice cream truck and ran outside, leaving me alone in the restaurant. 10 minutes later they all came back with ice cream cones... I still can't believe this actually happened",
#     user_id: user6.id,
#     business_id: business6.id 
# })
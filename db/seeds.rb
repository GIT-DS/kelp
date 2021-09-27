# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

#User Seeds
user1 = User.create!({
    username:"alpha",
    password:"alpha",
    email:"alpha.io",
    first_name: 'al',
    last_name: 'pha',
    zip_code: 00001
})
user2 = User.create!({
    username:"bravo",
    password:"bravo",
    email:"bravo.io",
    first_name: 'bra',
    last_name: 'vo',
    zip_code: 00002
})
user3 = User.create!({
    username:"charlie",
    password:"charlie",
    email:"charlie.io",
    first_name: 'char',
    last_name: 'lie',
    zip_code: 00003
})
user4 = User.create!({
    username:"delta",
    password:"delta",
    email:"delta.io",
    first_name: 'del',
    last_name: 'ta',
    zip_code: 00004
})
user5 = User.create!({
    username:"echo",
    password:"echo",
    email:"echo.io",
    first_name: 'ec',
    last_name: 'ho',
    zip_code: 00005
})
user6 = User.create!({
    username:"foxtrot",
    password:"foxtrot",
    email:"foxtrot.io",
    first_name: 'fox',
    last_name: 'trot',
    zip_code: 00006
})






# Business Seeds

business1 = Business.create!({
    title: 'Hop Li Seafood Restaurant',
    phone_num: '(213) 680-3939',
    time_open: '11:00',
    time_close: '20:00',
    website: '',
    cost: '$$',
    address: '526 Alpine St.',
    city: 'Los Angeles',
    state: 'CA',
    zip_code: '90012',
    longitude: 34.067347503798935, 
    latitude: -118.2408155940718
})









# Review Seeds

# review1 = Review.create!({
#     rating: 2,
#     comment: "I didn't have a good experience here",
#     user_id: 1,
#     business_id: 2
# })
# review2 = Review.create!({
#     rating: 5,
#     comment: 'This place is amazing!',
#     user_id: 1,
#     business_id: 1 
# })
# review3 = Review.create!({
#     rating: 4,
#     comment: 'The ambience is just right',
#     user_id: 2,
#     business_id: 3 
# })
# review4 = Review.create!({
#     rating: 3,
#     comment: 'Not too great, not too bad',
#     user_id: 2,
#     business_id: 4
# })
# review5 = Review.create!({
#     rating: 1,
#     comment: "I'm angry and you should be too",
#     user_id: 3,
#     business_id: 5 
# })
# review6 = Review.create!({
#     rating: 1,
#     comment: "I really dislike the staff here",
#     user_id: 3,
#     business_id: 6 
# })
# review7 = Review.create!({
#     rating: 5,
#     comment: "Just here for the freebies",
#     user_id: 4,
#     business_id: 1 
# })
# review8 = Review.create!({
#     rating: 5,
#     comment: "MORE FREEBIES!",
#     user_id: 4,
#     business_id: 2
# })
# review9 = Review.create!({
#     rating: 3,
#     comment: "I'm a middle of road kind of guy",
#     user_id: 5,
#     business_id: 3 
# })

# review10 = Review.create!({
#     rating: 4,
#     comment: "Slightly better than expected",
#     user_id: 5,
#     business_id: 4 
# })

# review11 = Review.create!({
#     rating: 5,
#     comment: "Great Fantastic Love it",
#     user_id: 6,
#     business_id: 5 
# })

# review12 = Review.create!({
#     rating: 1,
#     comment: "The entire kitchen and wait staff saw an ice cream truck and ran outside, leaving me alone in the restaurant. 10 minutes later they all came back with ice cream cones... I still can't believe this actually happened",
#     user_id: 6,
#     business_id: 6 
# })
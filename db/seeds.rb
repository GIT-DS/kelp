# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

BusinessCategory.destroy_all
Category.destroy_all
Business.destroy_all
Review.destroy_all
User.destroy_all

#User Seeds
u1 = User.create!({
    username:"alpha",
    password:"alpha",
    email:"alpha.io",
    first_name: 'Darrick',
    last_name: 'Shin',
    zip_code: 10001
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/darrick.jpeg')
u1.photo.attach(io: file, filename: 'darrick.jpeg')

u2 = User.create!({
    username:"bravo",
    password:"bravo",
    email:"bravo.io",
    first_name: 'Jimmy',
    last_name: 'Kuang',
    zip_code: 10002
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/jimmy.jpeg')
u2.photo.attach(io: file, filename: 'jimmy.jpeg')

u3 = User.create!({
    username:"charlie",
    password:"charlie",
    email:"charlie.io",
    first_name: 'David',
    last_name: 'Oh',
    zip_code: 10003
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/david.jpeg')
u3.photo.attach(io: file, filename: 'david.jpeg')

u4 = User.create!({
    username:"delta",
    password:"delta",
    email:"delta.io",
    first_name: 'Ian',
    last_name: 'Mcgrath',
    zip_code: 10004
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/ian.jpeg')
u4.photo.attach(io: file, filename: 'ian.jpeg')


u5 = User.create!({
    username:"echo",
    password:"echo",
    email:"echo.io",
    first_name: 'Mike',
    last_name: 'Le',
    zip_code: 10005
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/mike.jpeg')
u5.photo.attach(io: file, filename: 'mike.jpeg')


u6 = User.create!({
    username:"foxtrot",
    password:"foxtrot",
    email:"foxtrot.io",
    first_name: 'Vincent',
    last_name: 'Hsu',
    zip_code: 10006
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/vincent.png')
u6.photo.attach(io: file, filename: 'vincent.png')

# Business Seeds

b1 = Business.create!({
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
    latitude: 34.0630105974283, 
    longitude: -118.2405532741371
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/restaurants/rockin/o.jpg')
b1.photos.attach(io: file, filename: 'o.jpg')

b2 = Business.create!({
    title: "Rock'N Fish Restaurant",
    phone_num: '(213) 536-5020',
    time_open: '10:30 AM PST',
    time_close: '07:00 PM PST',
    website: '',
    cost: '$$$',
    address: '800 W. Olympic Blvd A160',
    city: 'Los Angeles',
    state: 'CA',
    zip_code: '90015',
    latitude: 34.04431098152374, 
    longitude: -118.26546505890268
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/user_photos/q.jpg')
b2.photos.attach(io: file, filename: 'q.jpg')

b3 = Business.create!({
    title: "Señor Fish",
    phone_num: '(323) 257-7167',
    time_open: '12:00 PM PST',
    time_close: '10:00 PM PST',
    website: 'https://xn--seorfish-e3a.com/',
    cost: '$$',
    address: '4803 Eagle Rock Blvd',
    city: 'Los Angeles',
    state: 'CA',
    zip_code: '90041',
    latitude: 34.13277943497066, 
    longitude: -118.2163246487503 
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/senor.jpg')
b3.photos.attach(io: file, filename: 'senor.jpg')


b4 = Business.create!({
    title: "EMC Seafood & Raw Bar",
    phone_num: '(213) 351-9988',
    time_open: '6:00 PM PST',
    time_close: '1:00 AM PST',
    website: 'emcseafood.com',
    cost: '$$',
    address: '3500 W 6th St Ste 101',
    city: 'Los Angeles',
    state: 'CA',
    zip_code: '90020',
    latitude: 34.06338087933894, 
    longitude: -118.29900206037992
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/emc.jpg')
b4.photos.attach(io: file, filename: 'emc.jpg')


b5 = Business.create!({
    title: "Fishwives",
    phone_num: '(626) 219-6199',
    time_open: '12:30 PM PST',
    time_close: '10:30 PM PST',
    website: 'fishwives.com',
    cost: '$$',
    address: '88 N Fair Oaks Ave',
    city: 'Pasadena',
    state: 'CA',
    zip_code: '91103',
    latitude: 34.147402036139034, 
    longitude: -118.15030490831988
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/fishwives.jpg')
b5.photos.attach(io: file, filename: 'fishwives.jpg')


b6 = Business.create!({
    title: "Playa Del Carmen Seafood & Grill",
    phone_num: '(626) 345-5956',
    time_open: '12:00 PM PST',
    time_close: '10:00 PM PST',
    website: 'playadelcarmenrestaurant.com',
    cost: '$',
    address: '950 E Colorado Blvd Ste 202',
    city: 'Pasadena',
    state: 'CA',
    zip_code: '91106',
    latitude: 34.145715320802566, 
    longitude: -118.1304967008879
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/playa.jpg')
b6.photos.attach(io: file, filename: 'playa.jpg')


b7 = Business.create!({
    title: "Saso",
    phone_num: '(626) 808-4976',
    time_open: '6:00 PM PST',
    time_close: '11:00 PM PST',
    website: 'sasobistro.com',
    cost: '$$$',
    address: '37 S El Molino Ave',
    city: 'Pasadena',
    state: 'CA',
    zip_code: '91101',
    latitude: 34.14520947706918,
    longitude: -118.13718640349327
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/saso.jpg')
b7.photos.attach(io: file, filename: 'saso.jpg')

b8 = Business.create!({
    title: "Bodegon No 69",
    phone_num: '(626) 421-6180',
    time_open: '5:00 PM PST',
    time_close: '10:00 PM PST',
    website: 'bodegon69',
    cost: '$$',
    address: '69 N Raymond Ave',
    city: 'Pasadena',
    state: 'CA',
    zip_code: '91103',
    latitude: 34.14715470715395, 
    longitude: -118.14913168832003, 
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/bodegon.jpg')
b8.photos.attach(io: file, filename: 'bodegon.jpg')

b9 = Business.create!({
    title: "Holy Crab",
    phone_num: '(626) 461-5011',
    time_open: '12:30 PM PST',
    time_close: '9:45 PM PST',
    website: 'holycrabca.com',
    cost: '$$',
    address: '400 S Baldwin Ave Ste 2325',
    city: 'Arcadia',
    state: 'CA',
    zip_code: '91007',
    latitude: 34.13371086548888, 
    longitude: -118.05234487848631,
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/hcrab.png')
b9.photos.attach(io: file, filename: 'hcrab.png')

b10 = Business.create!({
    title: "The Boiling Crab",
    phone_num: '(747) 201-3346',
    time_open: '4:00 PM PST',
    time_close: '11:00 PM PST',
    website: 'theboilingcrab.com',
    cost: '$$',
    address: '140 Palm Ave Ste 210',
    city: 'Burbank',
    state: 'CA',
    zip_code: '91502',
    latitude: 34.18188122451207, 
    longitude: -118.31110164231018, 
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/boilingcrab.jpg')
b10.photos.attach(io: file, filename: 'boilingcrab.jpg')

b11 = Business.create!({
    title: "California Fish Grill",
    phone_num: '(747) 223-5242',
    time_open: '12:00 PM PST',
    time_close: '10:00 PM PST',
    website: 'cafishgrill.com',
    cost: '$',
    address: '551 N Hollywood Way',
    city: 'Burbank',
    state: 'CA',
    zip_code: '91505',
    latitude: 34.16049640826344,
    longitude: -118.34395842816673
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/cafishgrill.jpg')
b11.photos.attach(io: file, filename: 'cafishgrill.jpg')

b12 = Business.create!({
    title: "Octopus Japanese Restaurant",
    phone_num: '(818) 556-6622',
    time_open: '12:30 PM PST',
    time_close: '11:00 PM PST',
    website: 'octopusrestaurant.com',
    cost: '$$',
    address: '227 E Palm Ave',
    city: 'Burbank',
    state: 'CA',
    zip_code: '91502',
    latitude: 34.18294199085147, 
    longitude: -118.31043959883708
})

file = open('https://kelp-yelp-clone-seeds.s3.us-west-1.amazonaws.com/octopus.jpg')
b12.photos.attach(io: file, filename: 'octopus')



#Review Seeds

## user 1 reviews
Review.create!({
    rating: 2,
    comment: "I didn't have a good experience here",
    user_id: u1.id,
    business_id: b1.id
})

Review.create!({
    rating: 5,
    comment: 'This place is amazing!',
    user_id: u1.id,
    business_id: b2.id 
})

Review.create!({
    rating: 3,
    comment: "I am a robot feed me oil",
    user_id: u1.id,
    business_id: b3.id
})

Review.create!({
    rating: 4,
    comment: "Beep Boop",
    user_id: u1.id,
    business_id: b4.id
})

Review.create!({
    rating: 5,
    comment: "Great Fish and Chips",
    user_id: u1.id,
    business_id: b5.id
})

Review.create!({
    rating: 5,
    comment: "WOW",
    user_id: u1.id,
    business_id: b6.id
})

Review.create!({
    rating: 4,
    comment: "This place is good!",
    user_id: u1.id,
    business_id: b7.id
})

Review.create!({
    rating: 5,
    comment: "Holy Crab this is amazing!",
    user_id: u1.id,
    business_id: b9.id
})

Review.create!({
    rating: 3,
    comment: "the Tacos were alright",
    user_id: u1.id,
    business_id: b11.id
})

Review.create!({
    rating: 5,
    comment: "They didn't actually have octopus, but the tuna was goooood!",
    user_id: u1.id,
    business_id: b12.id
})

## user 2 reviews
Review.create!({
    rating: 1,
    comment: "I'm angry and you should be too" ,
    user_id: u2.id,
    business_id: b1.id 
})

Review.create!({
    rating: 1,
    comment: "I really dislike the staff here",
    user_id: u2.id,
    business_id: b2.id
})

Review.create!({
    rating: 1,
    comment: "Grumpy Grump",
    user_id: u2.id,
    business_id: b3.id
})

Review.create!({
    rating: 1,
    comment: "Grumble",
    user_id: u2.id,
    business_id: b4.id
})

Review.create!({
    rating: 1,
    comment: ">:(",
    user_id: u2.id,
    business_id: b5.id
})

Review.create!({
    rating: 5,
    comment: "Gotta give one of these places a good review",
    user_id: u2.id,
    business_id: b6.id
})

Review.create!({
    rating: 1,
    comment: "WHAT IS A BODEGON?!?!?!?",
    user_id: u2.id,
    business_id: b8.id
})

Review.create!({
    rating: 1,
    comment: "Holy Crab this is bad!",
    user_id: u2.id,
    business_id: b9.id
})

Review.create!({
    rating: 1,
    comment: "I'm angry!",
    user_id: u2.id,
    business_id: b11.id
})

Review.create!({
    rating: 1,
    comment: "Where's the octopus?",
    user_id: u2.id,
    business_id: b12.id
})

## user 3 reviews

Review.create!({
    rating: 1,
    comment: 'The ambience is just right',
    user_id: u3.id,
    business_id: b1.id 
})
Review.create!({
    rating: 1,
    comment: 'Not too great, not too bad',
    user_id: u3.id,
    business_id: b2.id 
})

Review.create!({
    rating: 1,
    comment: "Who's the senior at this establishment? I haven't met him once",
    user_id: u3.id,
    business_id: b3.id
})

Review.create!({
    rating: 1,
    comment: "EMC? What do these guys think they're Einstein?",
    user_id: u3.id,
    business_id: b4.id
})

Review.create!({
    rating: 4,
    comment: "I came here to find a wife. There were no wives to be found. Great food though!",
    user_id: u3.id,
    business_id: b5.id
})

Review.create!({
    rating: 5,
    comment: "Amazing!",
    user_id: u3.id,
    business_id: b6.id
})

Review.create!({
    rating: 4,
    comment: "Nice place!",
    user_id: u3.id,
    business_id: b7.id
})

Review.create!({
    rating: 5,
    comment: "The crab was good!",
    user_id: u3.id,
    business_id: b9.id
})


Review.create!({
    rating: 5,
    comment: "Pretty good!",
    user_id: u3.id,
    business_id: b11.id
})

Review.create!({
    rating: 5,
    comment: "Nice and clean!",
    user_id: u3.id,
    business_id: b12.id
})

## user 4 reviews

Review.create!({
    rating: 5,
    comment: "Just here for the freebies",
    user_id: u4.id,
    business_id: b1.id 
})
Review.create!({
    rating: 1,
    comment: "THIS PLACE DOESN'T SELL ROCKS AT ALL!",
    user_id: u4.id,
    business_id: b2.id
})

Review.create!({
    rating: 5,
    comment: "This place has a bar, I like bars",
    user_id: u4.id,
    business_id: b3.id
})

Review.create!({
    rating: 4,
    comment: "YES",
    user_id: u4.id,
    business_id: b4.id
})

Review.create!({
    rating: 5,
    comment: "Big Fan",
    user_id: u4.id,
    business_id: b5.id
})

Review.create!({
    rating: 5,
    comment: "Great Food, Great Environment",
    user_id: u4.id,
    business_id: b8.id
})

Review.create!({
    rating: 5,
    comment: "The crawfish were so big here! Had a great time with family",
    user_id: u4.id,
    business_id: b10.id
})

Review.create!({
    rating: 5,
    comment: "Rolls on rolls!",
    user_id: u4.id,
    business_id: b12.id
})

## user 5 reviews

Review.create!({
    rating: 3,
    comment: "I'm a middle of road kind of guy",
    user_id: u5.id,
    business_id: b1.id 
})

Review.create!({
    rating: 4,
    comment: "Slightly better than expected",
    user_id: u5.id,
    business_id: b2.id 
})

Review.create!({
    rating: 4,
    comment: "Not bad",
    user_id: u5.id,
    business_id: b3.id
})

Review.create!({
    rating: 3,
    comment: "Meh",
    user_id: u5.id,
    business_id: b4.id
})

Review.create!({
    rating: 2,
    comment: "It was alright",
    user_id: u5.id,
    business_id: b5.id
})

Review.create!({
    rating: 5,
    comment: "Great Tostadas",
    user_id: u5.id,
    business_id: b6.id
})

Review.create!({
    rating: 4,
    comment: "Amazing!",
    user_id: u5.id,
    business_id: b7.id
})

Review.create!({
    rating: 2,
    comment: "Too Messy!",
    user_id: u5.id,
    business_id: b10.id
})

Review.create!({
    rating: 5,
    comment: "My server was really nice!",
    user_id: u5.id,
    business_id: b12.id
})

## user 6 reviews

Review.create!({
    rating: 5,
    comment: "Great Fantastic Love it",
    user_id: u6.id,
    business_id: b1.id 
})

Review.create!({
    rating: 1,
    comment: "The entire kitchen and wait staff saw an ice cream truck and ran outside, leaving me alone in the restaurant. 10 minutes later they all came back with ice cream cones... I still can't believe this actually happened",
    user_id: u6.id,
    business_id: b2.id 
})

Review.create!({
    rating: 1,
    comment: "How could this happen to me? I made my mistakes. Got nowhere to run. The night goes on. As I'm fading away. I'm sick of this life. I just wanna scream. How could this happen to me?",
    user_id: u6.id,
    business_id: b3.id
})

Review.create!({
    rating: 5,
    comment: "Best Oysters in Town!",
    user_id: u6.id,
    business_id: b4.id
})

Review.create!({
    rating: 4,
    comment: "The club isn't the best place to find a lover
        So the bar is where I go
        Me and my friends at the table doing shots
        Drinking faster and then we talk slow
        Come over and start up a conversation with just me
        And trust me I'll give it a chance now
        Take my hand, stop
        Put Van The Man on the jukebox
        And then we start to dance
        And now I'm singing like
        
        Girl, you know I want your love
        Your love was handmade for somebody like me
        Come on now, follow my lead
        I may be crazy, don't mind me
        Say, boy, let's not talk too much
        Grab on my waist and put that body on me
        Come on now, follow my lead
        Come, come on now, follow my lead",
    user_id: u6.id,
    business_id: b5.id
})

Review.create!({
    rating: 5,
    comment: "Typed this on my $600 keyboard",
    user_id: u6.id,
    business_id: b6.id
})

Review.create!({
    rating: 5,
    comment: "Gold jewelry shining so bright
    Strawberry champagne on ice
    Lucky for you, that's what I like, that's what I like
    Lucky for you, that's what I like, that's what I like
    Sex by the fire at night
    Silk sheets and diamonds all white
    Lucky for you, that's what I like, that's what I like
    Lucky for you, that's what I like, that's what I like",
    user_id: u6.id,
    business_id: b8.id
})

Review.create!({
    rating: 5,
    comment: "Oh, I want something just like this
    I want something just like this",
    user_id: u6.id,
    business_id: b10.id
})

Review.create!({
    rating: 5,
    comment: "Overthinking's got me drinking
    Messing with my head, whoa
    Tell me what you hate about me
    Whatever it is, I'm sorry
    Yeah, yeah, yeah, yeah, yeah, yeah
    I know I can be dramatic
    But everybody said we had it
    Yeah, yeah, yeah, yeah, yeah, yeah
    I'm coming to terms with a broken heart
    I guess that sometimes good things fall apart",
    user_id: u6.id,
    business_id: b12.id
})


#Categories

c1 = Category.create!({
    title: 'Seafood'
})

c2 = Category.create!({
    title: 'Chinese'
})

c3 = Category.create!({
    title: 'Gastropubs'
})

c4 = Category.create!({
    title: 'American'
})

c5 = Category.create!({
    title: 'Mexican'
})

c6 = Category.create!({
    title: 'Bars'
})

c7 = Category.create!({
    title: 'Live-Raw Food'
})

c8 = Category.create!({
    title: 'Sushi Bars'
})

c9 = Category.create!({
    title: 'Wine Bars'
})

c10 = Category.create!({
    title: 'Tacos'
})

c11 = Category.create!({
    title: 'Cocktail Bars'
})

c12 = Category.create!({
    title: 'Basque'
})

c13 = Category.create!({
    title: 'Latin American'
})

c14 = Category.create!({
    title: 'Peruvian'
})

c15 = Category.create!({
    title: 'Cajun-Creole'
})

c16 = Category.create!({
    title: 'Fish and Chips'
})

c17 = Category.create!({
    title: 'Japanese'
})

#Business Categories

BusinessCategory.create!({
    category_id: c1.id,
    business_id: b1.id,
})

BusinessCategory.create!({
    category_id: c2.id,
    business_id: b1.id,
})

BusinessCategory.create!({
    category_id: c1.id,
    business_id: b2.id,
})

BusinessCategory.create!({
    category_id: c3.id,
    business_id: b2.id,
})

BusinessCategory.create!({
    category_id: c4.id,
    business_id: b2.id,
}) 

BusinessCategory.create!({
    category_id: c5.id,
    business_id: b3.id
})

BusinessCategory.create!({
    category_id: c6.id,
    business_id: b3.id
})

BusinessCategory.create!({
    category_id: c1.id,
    business_id: b3.id
})

BusinessCategory.create!({
    category_id: c1.id,
    business_id: b4.id
})

BusinessCategory.create!({
    category_id: c7.id,
    business_id: b4.id
})

BusinessCategory.create!({
    category_id: c8.id,
    business_id: b4.id
})

BusinessCategory.create!({
    category_id: c1.id,
    business_id: b5.id
})

BusinessCategory.create!({
    category_id: c7.id,
    business_id: b5.id
})

BusinessCategory.create!({
    category_id: c9.id,
    business_id: b5.id
})

BusinessCategory.create!({
    category_id: c1.id,
    business_id: b6.id
})

BusinessCategory.create!({
    category_id: c5.id,
    business_id: b6.id
})

BusinessCategory.create!({
    category_id: c10.id,
    business_id: b6.id
})

BusinessCategory.create!({
    category_id: c11.id,
    business_id: b6.id
})


BusinessCategory.create!({
    category_id: c1.id,
    business_id: b7.id
})

BusinessCategory.create!({
    category_id: c12.id,
    business_id: b7.id
})

BusinessCategory.create!({
    category_id: c11.id,
    business_id: b7.id
})

BusinessCategory.create!({
    category_id: c11.id,
    business_id: b8.id
})

BusinessCategory.create!({
    category_id: c13.id,
    business_id: b8.id
})

BusinessCategory.create!({
    category_id: c14.id,
    business_id: b8.id
})

BusinessCategory.create!({
    category_id: c1.id,
    business_id: b9.id
})


BusinessCategory.create!({
    category_id: c15.id,
    business_id: b9.id
})


BusinessCategory.create!({
    category_id: c1.id,
    business_id: b10.id
})

BusinessCategory.create!({
    category_id: c15.id,
    business_id: b10.id
})

BusinessCategory.create!({
    category_id: c1.id,
    business_id: b11.id
})

BusinessCategory.create!({
    category_id: c10.id,
    business_id: b11.id
})

BusinessCategory.create!({
    category_id: c16.id,
    business_id: b11.id
})

BusinessCategory.create!({
    category_id: c1.id,
    business_id: b12.id
})

BusinessCategory.create!({
    category_id: c8.id,
    business_id: b12.id
})

BusinessCategory.create!({
    category_id: c17.id,
    business_id: b12.id
})

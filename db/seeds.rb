# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.new({
    username:"alpha",
    password:"alpha",
    email:"alpha.io",
    first_name: 'al',
    last_name: 'pha',
    zip_code: 00001
})
user2 = User.new({
    username:"bravo",
    password:"bravo",
    email:"bravo.io",
    first_name: 'bra',
    last_name: 'vo',
    zip_code: 00002
})
user3 = User.new({
    username:"charlie",
    password:"charlie",
    email:"charlie.io",
    first_name: 'char',
    last_name: 'lie',
    zip_code: 00003
})
user4 = User.new({
    username:"delta",
    password:"delta",
    email:"delta.io",
    first_name: 'del',
    last_name: 'ta',
    zip_code: 00004
})
user5 = User.new({
    username:"echo",
    password:"echo",
    email:"echo.io",
    first_name: 'ec',
    last_name: 'ho',
    zip_code: 00005
})
user6 = User.new({
    username:"foxtrot",
    password:"foxtrot",
    email:"foxtrot.io",
    first_name: 'fox',
    last_name: 'trot',
    zip_code: 00006
})

user1.save!
user2.save!
user3.save!
user4.save!
user5.save!
user6.save!

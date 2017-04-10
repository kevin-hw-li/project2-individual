# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create name: "Jarred", image_id: 1, email: "aaa@aaa.com", admin: false
u2 = User.create name: "Kevin", image_id: 2, email: "bbb@bbb.com", admin: false
u1 = User.create name: "Jarred", image_id: 3, email: "ccc@ccc.com", admin: false

i1 = Image.create user_id: 1, playlist_id: 1, img_src: 

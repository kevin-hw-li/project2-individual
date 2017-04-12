# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Image.destroy_all
PLaylist.destroy_all

u1 = User.create name: "Jared", email: "aaa@aaa.com", admin: true
u2 = User.create name: "Kevin", email: "bbb@bbb.com", admin: false
u3 = User.create name: "Petr", email: "ccc@ccc.com", admin: false


p1 = Playlist.create image_id: 1, playlist_url: "ghj34gh234"
p2 = Playlist.create image_id: 2, playlist_url: "gasjgh234"
p3 = Playlist.create image_id: 3, playlist_url: "ghjsdfgsdgh234"

i1 = Image.create user: u1, playlist: p1, img_src: "aaasg123ty1"
i2 = Image.create user: u2, playlist: p2, img_src: "bbb1ghg412"
i3 = Image.create user: u3, playlist: p3, img_src: "cccghj2342"

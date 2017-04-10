class User < ApplicationRecord
  has_many :images
  has_many :playlists, through: :images
end

class User < ApplicationRecord
  has_many :images
  has_many :playlists, through: :images
  validates_uniqueness_of :email, :case_sensitive => false, :with => /.+@.+\..+/i
  validates_uniqueness_of :name
end

class Image < ApplicationRecord
  belongs_to :user
  has_one :playlist
end

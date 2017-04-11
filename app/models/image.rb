class Image < ApplicationRecord
  belongs_to :user, optional: true
  has_one :playlist
end

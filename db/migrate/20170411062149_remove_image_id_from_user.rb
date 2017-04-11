class RemoveImageIdFromUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :image_id
  end
end

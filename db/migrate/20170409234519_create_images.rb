class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer :user_id
      t.integer :playlist_id
      t.text :img_src

      t.timestamps
    end
  end
end

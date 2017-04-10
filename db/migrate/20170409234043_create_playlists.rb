class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.integer :image_id
      t.text :playlist_url

      t.timestamps
    end
  end
end

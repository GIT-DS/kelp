class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :title, null: false
      t.string :phone_num, null:false
      t.datetime :time_open, null:false
      t.datetime :time_close, null:false
      t.string :website
      t.string :cost, null: false
      t.string :address, null:false
      t.string :city, null:false
      t.integer :zip_code, null:false
      t.float :longitude, null:false
      t.float :latitude, null:false

      t.timestamps
    end
    add_index :businesses, :title
    add_index :businesses, :address, unique: true
  end
end

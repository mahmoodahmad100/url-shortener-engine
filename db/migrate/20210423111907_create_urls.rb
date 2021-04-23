class CreateUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.string :link, null: false
      t.string :shortcut, null: false
      t.timestamps
    end
  end
end

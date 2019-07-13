class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :name
      t.boolean :is_show, default: true
      t.float :price, default: 0
      t.integer :pages, default: 0
      t.timestamps
    end
  end
end

class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string  :text, null: false
      t.boolean :completed, default: false, null: false
    end
  end
end

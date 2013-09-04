class CreatePostvotes < ActiveRecord::Migration
  def change
    create_table :postvotes do |t|
      t.timestamps

      t.belongs_to :post
      t.belongs_to :user
    end
  end
end

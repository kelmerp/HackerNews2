class CreateCommentvotes < ActiveRecord::Migration
  def change
    create_table :commentvotes do |t|
      t.timestamps

      t.belongs_to :user
      t.belongs_to :comment
    end
  end
end

class Todo < ApplicationRecord
  validates :text, presence: true, length: { maximum: 255 }
  validates :completed, inclusion: [true, false]
end

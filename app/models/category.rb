# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    has_many :business_categories,
    foreign_key: :category_id,
    class_name: :BusinessCategory

    has_many :businesses,
    through: :business_categories,
    source: :business
end

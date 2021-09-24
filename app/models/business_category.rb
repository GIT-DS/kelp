# == Schema Information
#
# Table name: business_categories
#
#  id          :bigint           not null, primary key
#  category_id :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class BusinessCategory < ApplicationRecord
    validates_presence_of :category_id, :business_id
    belongs_to :category

    belongs_to :business
end

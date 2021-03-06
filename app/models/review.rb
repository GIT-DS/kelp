# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  rating      :integer          not null
#  comment     :text             not null
#  user_id     :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
    validates_presence_of :rating, :comment, :user_id, :business_id

    belongs_to :user

    belongs_to :business
end

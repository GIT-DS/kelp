# == Schema Information
#
# Table name: businesses
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  phone_num  :string           not null
#  time_open  :datetime         not null
#  time_close :datetime         not null
#  website    :string
#  cost       :string           not null
#  address    :string           not null
#  city       :string           not null
#  zip_code   :integer          not null
#  longitude  :float            not null
#  latitude   :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Business < ApplicationRecord
    validates_presence_of :title, :phone_num, :time_open, :time_close, :cost, :address, :city, :zip_code, :longitude, :latitude
    validates_uniqueness_of :address

    has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review

    has_many :business_categories,
    foreign_key: :business_id,
    class_name: :BusinessCategory

    has_many :categories,
    through: :business_categories,
    source: :Category
end

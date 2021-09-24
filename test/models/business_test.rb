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
require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

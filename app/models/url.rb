class Url < ApplicationRecord
    validates :link, presence: true, :format => { :with => URI::regexp(%w(http https)), :message => 'Valid URL required' }
end

class Url < ApplicationRecord
    validates :link, presence: true, :format => { :with => URI::regexp(%w(http https)), :message => 'Valid URL required' }
    
    before_save do
        self.shortcut = self.shortcut
    end

    def shortcut=(val)
        write_attribute(:shortcut, val ? val : SecureRandom.base64(8))
    end
end

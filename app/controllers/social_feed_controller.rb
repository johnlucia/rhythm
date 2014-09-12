class SocialFeedController < ApplicationController
  def twitter
    twitter_handle = "johnlucia"

    config = {
      :consumer_key    => ENV['TWITTER_CONSUMER_KEY'],
      :consumer_secret => ENV['TWITTER_CONSUMER_SECRET']
    }

    client = Twitter::REST::Client.new(config)
    options = {:count => 10, :include_rts => true}
    @twitter_feed = client.user_timeline(twitter_handle, options)

    render json: @twitter_feed.to_json
  end

  def instagram
    response = HTTParty.get("https://api.instagram.com/v1/users/1493863880/media/recent?client_id=#{ENV['INSTAGRAM_CLIENT_ID']}")
    @instagram = response.body

    render json: @instagram
  end

  def combined
  end
end

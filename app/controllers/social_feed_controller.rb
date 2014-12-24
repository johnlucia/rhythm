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
    instagram_data = JSON.parse response.body
    posts = instagram_data['data']
    images = []
    posts.each do |post|
      image = {}
      image[:small_image] = post['images']['low_resolution']['url']
      image[:image] = post['images']['standard_resolution']['url']
      image[:thumb] =  post['images']['thumbnail']['url']
      image[:big] =  post['images']['standard_resolution']['url']
      image[:layer] = "<div class='photo-caption'>#{post['caption']['text']}</div>" if post['caption']
      image[:latitude] = post['location']['latitude']
      image[:longitude] = post['location']['longitude']
      images << image
    end

    render json: images.to_json
  end

  def youtube
  end

  def combined
  end
end

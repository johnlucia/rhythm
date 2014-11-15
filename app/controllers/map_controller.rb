class MapController < ApplicationController
  def show
    @page = ::Refinery::Page.new(slug: "big-map")
  end
end

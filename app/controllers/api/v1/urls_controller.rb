class Api::V1::UrlsController < ApplicationController
  def create
    url = Url.find_by_link(params[:link])
    
    if !url
      url = Url.create!(url_params)
    end

    if url
      render json: url
    else
      render json: url.errors
    end
  end

  private

  def url_params
    params.permit(:link)
  end
end

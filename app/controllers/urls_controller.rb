class UrlsController < ApplicationController
  def show
    url = Url.find_by_shortcut(params[:shortcut])
    if url
      redirect_to url.link
    else
      redirect_to root_path
    end
  end
end

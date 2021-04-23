Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'urls', to: 'urls#create'
    end
  end
  root 'homepage#index'
  get '/:shortcut', to: 'urls#show'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  root "pages#index"

  resources :users, only: [:new, :create]
  get "signin", to: "sessions#new", as: "signin"
  post "signin", to: "sessions#create"
  delete "signout", to: "sessions#destroy", as: "signout"

  resources :images
  resources :playlists



end

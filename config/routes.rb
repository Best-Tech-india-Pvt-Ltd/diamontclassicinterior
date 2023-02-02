Rails.application.routes.draw do
   root to: "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :home
  get "bathroom" ,to: "home#bathroom"
  get "bedroom" ,to: "home#bedroom"
  get "completeautomation" ,to: "home#completeautomation"
  get "completeinteriorwork" ,to: "home#completeinteriorwork"
  get "dining" ,to: "home#dining"
  get "furniture" ,to: "home#furniture"
  get "kitchen" ,to: "home#kitchen"
  get "living" ,to: "home#living"
  get "lobby" ,to: "home#lobby"
  get "modular_kitchen" ,to: "home#modular_kitchen"
  get "index" ,to: "home#index"
end

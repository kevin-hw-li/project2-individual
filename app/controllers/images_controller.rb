class ImagesController < ApplicationController
  def index
  end

  def new
    @image = Image.new
  end

  def create
    @image = Image.new

    @image.user = @current_user
    @image.img_src = params[:img_src]
    #
    # if params[:file].present?
    #    req = Cloudinary::Uploader.upload(params[:file])
    #    @image.image = req["public_id"]
    #  end

     if @image.save
       redirect_to root_path
     else
       render :new
     end
   end

end

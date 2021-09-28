class Api::BusinessesController < ApplicationController

    def index
        @businesses = Business.all
    end

    def show
        @business = Business.find_by(id: params[:id])
        if @business
            render :show
        else
            render json: ["Business doesn't exist"]
        end
    end

end

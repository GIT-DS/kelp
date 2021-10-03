class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.where(business_id: params[:business_id])
    end

    def show
        @review = Review.find_by(id: params[:id])
        if @review
            render :show
        else
            render json: ["Review doesn't exist"]
        end
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review
            @review.update(review_params)
            render :show
        else
            render json: ['Invalid']
        end
    end


    private
    def review_params
        params.require(:review).permit(:rating, :comment, :user_id, :business_id)
    end
end

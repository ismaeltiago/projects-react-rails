class Api::V1::ProductsController < Api::V1::BaseController
  def index
    respond_with Product.all
  end

  def create
    respond_with :api, :v1, Product.create(item_params)
  end

  def destroy
    respond_with Product.destroy(params[:id])
  end

  def update
    item = Product.find(params[:id])
    item.update_attributes(item_params)
    respond_with item, json: item
  end

  private

  def item_params
    params.require(:item).permit(:id, :name, :description)
  end
end
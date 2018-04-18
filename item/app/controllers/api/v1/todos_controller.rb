class Api::V1::TodosController < ApplicationController
  respond_to :json

  def index
    todos = Todo.all

    todos = todos.where(completed: params[:completed]) unless params[:completed].nil?

    respond_with todos
  end

  def create
    todo = Todo.new(params.require(:todo).permit!)
    if todo.save
      render json: todo.id
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  def update
    todo = Todo.find(params[:id])
    if todo.update_attributes(params.require(:todo).permit!)
      render json: todo.id
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  def destroy
    Todo.where(id: params[:id].split(',')).destroy_all
    render nothing: true, status: :ok
  end
end

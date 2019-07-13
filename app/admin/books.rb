ActiveAdmin.register Book do
  permit_params :name, :price, :pages, :is_show

  index do
    selectable_column
    id_column
    column :name
    column :price
    column :is_show
    column :pages
    actions
  end

  action_item do
    link_to '自定义新建book', :action => 'create_book_page'
  end

  action_item do
    link_to '自定义book列表', :action => 'book_list_page'
  end

  collection_action :create_book_page do
    render 'admin/book/create_book_page'
  end

  collection_action :book_list_page do
    @book_list = Book.first
    render 'admin/book/book_list_page', {book_list: @book_list}
  end

  collection_action :book_create, method: :post do
    name = params[:name]
    price = params[:price]
    pages = params[:pages]
    is_show = params[:is_show]
    Book.create!(name: name, price: price, pages: pages, price: price, is_show: is_show)
    redirect_to admin_books_path, notice: "创建成功"
  end

  filter :name
  filter :price
  filter :is_show
  filter :pages

end

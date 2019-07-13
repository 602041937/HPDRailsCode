ActiveAdmin.register_page "react_test" do
  content do
    admin_users = AdminUser.all
    @name = "hpd"
    @name2 = "xay"
    render partial: 'index', locals: {name: @name}
  end
end
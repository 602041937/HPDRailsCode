import React from "react"

class BookCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0,
            is_show: true,
            pages: 2
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleIsShowChange = this.handleIsShowChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handlePagesChange = this.handlePagesChange.bind(this)
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    handlePriceChange(event) {
        this.setState({
            price: event.target.value
        })
    }

    handlePagesChange(event) {
        this.setState({
            pages: event.target.value
        })
    }

    handleSubmit(e) {

        if (isNaN(Number(this.state.price))) {
            alert("price格式错误");
            e.preventDefault()
        }
        if (isNaN(Number(this.state.pages))) {
            alert("pages格式错误");
            e.preventDefault()
        }
    }

    handleIsShowChange(event) {
        this.setState({
            is_show: event.target.checked
        })
    }

    render() {
        return (
            <div>
                <form action="/admin/books/book_create" method="post" onSubmit={this.handleSubmit}>
                    书名：<input name="name" type="text" value={this.state.name}
                              onChange={this.handleNameChange}/><br/><br/>
                    价格：<input name="price" type="text" value={this.state.price}
                              onChange={this.handlePriceChange}/><br/><br/>
                    是否显示：<input name="is_show" type="checkbox" checked={this.state.is_show} value={this.state.is_show}
                                onChange={this.handleIsShowChange}/><br/><br/>
                    页数：<input name="pages" type="text" value={this.state.pages}
                              onChange={this.handlePagesChange}/><br/><br/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }
}

export default BookCreate

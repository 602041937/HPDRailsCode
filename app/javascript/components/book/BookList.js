import React from "react"

class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bookList: props.bookList
        }
    }

    render() {
        console.log("BookList")
        const listItems = this.state.bookList.map((book) =>
            <tr>
                <td>{book.name}</td>
                <td>{book.pages}</td>
                <td>{book.price}</td>
            </tr>
        );
        return (
            <div>
                12341
                <table>
                    {listItems}
                </table>
            </div>
        );
    }
}

export default BookList

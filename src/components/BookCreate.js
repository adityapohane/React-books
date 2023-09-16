import { useState } from 'react';
import useBooksContext from "../hooks/use-books-Context";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');
  const { createBooks } = useBooksContext();
    
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit=(event) => {
        event.preventDefault();
        createBooks(title); 
        setTitle('');
    }

    return (
      <div className="book-create">
        <h1>Add a Book</h1>
        <form onSubmit={handleSubmit}>
          <title>Title</title>
          <input
            className="input"
            type="text"
            value={title}
            onChange={handleChange}
          />
          <button className="button"> Create</button>
        </form>
      </div>
    );
}
export default BookCreate;
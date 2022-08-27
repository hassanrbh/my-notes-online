import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = (props) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const author = 'João Nunes';
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const note = { title, body, author, };
        setIsLoading(true);

        fetch(props.url, {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
        }).then(() => {
            setIsLoading(false)
            navigate('/')
        })
    }

    return (
        <div className="create">
            <h2>Add new note</h2>
            <form onSubmit={handleOnSubmit}>
                <label >Note Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Note body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label >Note author:</label>
                <input
                    type="text"
                    required
                    value={author}
                />
                {!isLoading && <button>Add Note</button>}
                {isLoading && <button disabled>Adding Note</button>}
            </form>
        </div>
    );
}

export default Create;
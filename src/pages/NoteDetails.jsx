import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const NoteDetails = (props) => {

    const { id } = useParams()
    const { data: note, error, isLoading } = useFetch(props.url + id)
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(props.url + id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })

    }



    return (
        <div className="note-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {note && (
                <article>
                    <h2>{note.title}</h2>
                    <p>Written by {note.author}</p>
                    <div>{note.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default NoteDetails;
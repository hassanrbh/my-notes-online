import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../components/reusable/loading';
import useFetch from '../hooks/useFetch';
import useDeleteNote from '../services/useDeleteNote';
import useFetchNote from '../services/useFetcheNote';
import { apiUrl } from '../utils/apiUrl';

const NoteDetails = (props) => {
  // TODO: you need to use react-query for avoiding getting the data that you already have it
  const { id } = useParams();
  const { note, error, isLoading } = useFetchNote(id);
  const navigate = useNavigate();

  const handleClick = async () => {
    await useDeleteNote(id).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="note-details">
      {isLoading && <Loading />}
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
};

export default NoteDetails;

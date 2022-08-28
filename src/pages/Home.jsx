import NotesList from '../components/NotesList';
import Loading from '../components/reusable/loading';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../utils/apiUrl';
import useFetchNotes from '../services/useFetchNotes';

const Home = () => {
  // caches the notes using react query
  const { notes, isLoading, error } = useFetchNotes();
  const navigate = useNavigate();

  if (error) {
    navigate('/notfound');
  }

  return (
    <div className="home">
      {isLoading && <Loading />}
      {notes && (
        <NotesList
          notes={notes}
          title="All Blogs!"
        />
      )}
    </div>
  );
};

export default Home;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCreateNote from '../services/useCreateNote';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const author = 'João Nunes';
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const note = { title, body, author };
    setIsLoading(true);

    await useCreateNote(note).then(() => {
      setIsLoading(false);
      navigate('/');
    });
  };

  // you may need to use formik for avoid this useState and loading and
  // validations and catching error messages very easy api to use
  return (
    <div className="create">
      <h2>Add new note</h2>
      <form onSubmit={handleOnSubmit}>
        <label>Note Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Note body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {!isLoading && <button>Add Note</button>}
        {isLoading && <button disabled>Adding Note</button>}
      </form>
    </div>
  );
};

export default Create;

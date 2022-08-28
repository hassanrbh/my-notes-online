import { apiUrl } from "../utils/apiUrl";
import useFetch from '../hooks/useFetch';

function useFetchNote(note_id) {
  const { data: note, error, isLoading } = useFetch(apiUrl + note_id);

  return {
    note,
    isLoading,
    error
  }
}

export default useFetchNote;
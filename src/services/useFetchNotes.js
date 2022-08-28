import { apiUrl } from "../utils/apiUrl";
import useFetch from '../hooks/useFetch';

function useFetchNotes() {
  const { data: notes, isLoading, error } = useFetch(apiUrl);

  return {
    notes,
    isLoading,
    error
  }
}

export default useFetchNotes;
import { apiUrl } from "../utils/apiUrl";
import axios from "axios";

async function useDeleteNote(note_id) {
  const { data } = await axios.delete(apiUrl + note_id, {
    headers: { 'Content-Type': 'application/json' }
  })  
  return data;
}

export default useDeleteNote;
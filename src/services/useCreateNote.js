import { apiUrl } from "../utils/apiUrl";
import axios from "axios";

async function useCreateNote(note) {
  const { data } = await axios.post(apiUrl, note, {
    headers: { 'Content-Type': 'application/json' }
  })
  
  return data;
}

export default useCreateNote;
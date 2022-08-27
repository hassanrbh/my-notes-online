import NotesList from "../components/NotesList";
import useFetch from "../hooks/useFetch";

const Home = (props) => {


    const { data: notes, isLoading, error } = useFetch(props.url);


    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {notes && <NotesList notes={notes} title='All Blogs!' />}
        </div>
    );
}

export default Home;
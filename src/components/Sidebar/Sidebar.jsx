import { Note } from 'components/Note/Note';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const notes = useSelector(state => state.notesData.notes);
  // const filteredNotes = notes.filter(note =>
  //   notes.notes.title.toLowerCase().trim()
  // );
  return (
    <>
      <div>
        {notes.length > 0 ? (
          notes.map(note => {
            return <Note key={note.id} {...note} />;
          })
        ) : (
          <p>Your notes is empty . Please add note.</p>
        )}
      </div>
    </>
  );
};

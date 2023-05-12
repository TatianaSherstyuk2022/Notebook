import { useDispatch, useSelector } from 'react-redux';
import { ADD_NOTE } from '../../redux/reducers';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addNote } from 'redux/actoins';

export const Workspace = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notesData.notes);
  const [title, setTitle] = useState('');
  const [descriptions, setDescriptions] = useState('');

  const onAddNote = e => {
    e.preventDefault();

    const finalNote = {
      id: nanoid(),
      title,
      descriptions,
    };

    dispatch(addNote(finalNote));
    setTitle('');
    setDescriptions('');
  };
  const titleChange = e => {
    setTitle(e.currentTarget.value);
  };

  const descriptionsChange = e => {
    setDescriptions(e.currentTarget.value);
  };

  return (
    <form onSubmit={onAddNote}>
      <h1>Title</h1>
      <input type="text" name="title" value={title} onChange={titleChange} />
      <p>Descriptions</p>
      <input
        type="text"
        name="descriptions"
        value={descriptions}
        onChange={descriptionsChange}
      />
      <button type="submit">Add note</button>
    </form>
  );
};

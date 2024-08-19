import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/app/hooks.ts';
import { selectNote, setNote } from '@/dispatchers/discountsSlice.ts';

export const NoteField: React.FC = () => {
  const dispatch = useDispatch();
  const note = useAppSelector(selectNote);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNote(e.target.value));
  };

  return (
    <div className="w-full">
      <p className="text-lg font-semibold mb-2">Add a Note:</p>
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Enter your note here"
        className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      />
    </div>
  );
};
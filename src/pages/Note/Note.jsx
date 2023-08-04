import { useParams } from "react-router-dom";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";

export function Note(props) {
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );

  const [isEditable, setIsEditable] = useState(false);

  function submit() {
    setIsEditable(false);
  }
  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={() => ""}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}

import { useParams } from "react-router-dom";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export function Note(props) {
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );
  console.log(note);
  return <>Note</>;
}

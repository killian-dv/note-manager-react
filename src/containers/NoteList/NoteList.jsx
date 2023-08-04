import s from "./style.module.css";
import { TextCard } from "components/TextCard/TextCard";
import { useNavigate } from "react-router-dom";
import { NoteApi } from "api/note-api";
import { useDispatch } from "react-redux";
import { deleteNote } from "store/note/note-slice";

export function NoteList({ noteList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function deleteNote_(note) {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      NoteApi.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }
  return (
    <div className="row justify-content-center">
      {noteList.map((note) => {
        return (
          <div className={s.card_container} key={note.id}>
            <TextCard
              title={note.title}
              subtitle={note.subtitle}
              content={note.content}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={() => deleteNote_(note)}
            />
          </div>
        );
      })}
    </div>
  );
}

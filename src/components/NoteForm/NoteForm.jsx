import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { useState } from "react";
import { ValidatorService } from "services/form-validators";
import { FieldError } from "components/FieldError/FieldError";

const VALIDATORS = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 3);
  },
};

export function NoteForm({ title, onClickEdit, onClickTrash, onSubmit }) {
  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
  });
  const [formErrors, setFormErrors] = useState({
    title: undefined,
    content: undefined,
  });

  function validate(fieldName, fieldValue) {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATORS[fieldName](fieldValue),
    });
  }

  console.log(formErrors);

  function updateFormValues(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
    validate(event.target.name, event.target.value);
  }

  const actionsIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon} />}
      </div>
      <div className="col-1">
        {onClickTrash && (
          <TrashFill onClick={onClickTrash} className={s.icon} />
        )}
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
      />
      <FieldError msg={formErrors.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        row="5"
      />
      <FieldError msg={formErrors.content} />
    </div>
  );

  const submitButton = (
    <>
      <div className={s.submit_btn}>
        <ButtonPrimary onClick={() => onSubmit(formValues)}>
          Submit
        </ButtonPrimary>
      </div>
    </>
  );

  return (
    <form className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionsIcons}
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>{titleInput}</div>
      <div className="mb-3">{contentInput}</div>
      {onSubmit && submitButton}
    </form>
  );
}

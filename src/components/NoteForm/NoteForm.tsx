import css from "./NoteForm.module.css";

export default function NoteForm() {
  return (
    <form className={css.form}>
      {/* Title */}
      <div className={css.formGroup}>
        <label>
          Title
          <input type="text" className={css.input} name="title" />
        </label>
      </div>

      {/* Content */}
      <div className={css.formGroup}>
        <label>
          Content
          <textarea className={css.textarea} name="content" rows={4} />
        </label>
      </div>

      {/* Tag (поки просто select) */}
      <div className={css.formGroup}>
        <label>
          Tag
          <select className={css.select} name="tag">
            <option value="todo">Todo</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </label>
      </div>

      {/* Buttons */}
      <div className={css.actions}>
        <button type="button" className={css.cancelButton}>
          Cancel
        </button>

        <button type="submit" className={css.submitButton}>
          Create
        </button>
      </div>
    </form>
  );
}

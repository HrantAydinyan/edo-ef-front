import { FORMS } from "@/constants/forms";

export const FormsTitle = () => {
  return (
    <div className="form_header">
      <h1 className="form_title">{FORMS.title}</h1>
      <p className="form_description">{FORMS.description}</p>
    </div>
  );
};

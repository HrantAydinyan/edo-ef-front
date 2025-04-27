"use client";

import {
  FORMS,
  FORM_TYPES,
  LOCATION_FORM,
  SEARCH_FORM,
} from "@/constants/forms";
import { FormsTitle } from "./Title";
import { TypeElement } from "./TypeElement";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./Input";

export const FormsContainer = () => {
  const [checkedTypeId, setCheckedTypeId] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {};

  return (
    <div className="form_content">
      <FormsTitle />
      <form className="form_page_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_element_container">
          <p className="section_title">{FORMS.what_currently_looking_for}</p>
          <div className="type_elements_section">
            {FORM_TYPES.map((elem) => (
              <TypeElement
                key={elem.id}
                name={elem.name}
                image={elem.image}
                id={elem.id}
                checkedTypeId={checkedTypeId}
                setCheckedTypeId={setCheckedTypeId}
              />
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className="form_element_container">
          <p className="section_title">{FORMS.where_looking}</p>
          <div className="inputs_field">
            {LOCATION_FORM.map((elem) => (
              <Input
                key={elem.id}
                register={register}
                name={elem.name}
                setValue={setValue}
                placeholder={elem.placeholder}
                errors={errors}
              />
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className="form_element_container">
          <p className="section_title">{FORMS.refine_your_search}</p>
          <div className="inputs_field">
            {SEARCH_FORM.map((elem) => (
              <Input
                key={elem.id}
                register={register}
                name={elem.name}
                setValue={setValue}
                placeholder={elem.placeholder}
                errors={errors}
              />
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className="form_element_container">
          <button className="request_button">
            {FORMS.create_search_request}
          </button>
        </div>
      </form>
    </div>
  );
};

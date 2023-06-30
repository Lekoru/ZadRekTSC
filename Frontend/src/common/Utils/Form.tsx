import React from 'react';
import {ParentProps} from '../types/Interfaces';

export const setDefaults = (form: Form, setForm: React.Dispatch<React.SetStateAction<Form>>) => {
  if (form.nameConf?.defaultValue) {
    form.name = form.nameConf?.defaultValue;
  }
  if (form.secondNameConf?.defaultValue) {
    form.secondName = form.secondNameConf?.defaultValue;
  }
  if (form.emailConf?.defaultValue) {
    form.email = form.emailConf?.defaultValue;
  }
  if (form.phoneConf?.defaultValue) {
    form.phone = form.phoneConf?.defaultValue;
  }
  if (form.messageConf?.defaultValue) {
    form.message = form.messageConf?.defaultValue;
  }
  setForm({...form});
};

export const handleChange = (value: string, fieldName: string, {form, setForm, setError, error}: ParentProps) => {
  const fieldConf = form[`${fieldName}Conf`];
  const errorField = `${fieldName}Error`;

  if (fieldConf) {
    const {max} = fieldConf;
    if (max && value.length > max) {
      error[errorField] = {
        error: true,
        errMsg: `Max ${max === 1 ? '1 znak' : max > 4 ? `${max} znaków` : `${max} znaki`}`
      };
      setError({...error});
      return;
    }
  }

  if (value.length > 32) {
    error[errorField] = {error: true, errMsg: 'Max 32 znaki'};
    setError({...error});
    return;
  }

  if (error[errorField].error) {
    error[errorField] = {error: false, errMsg: ''};
    setError({...error});
  }

  form[fieldName] = value;
  setForm({...form});
};

export const handleBlur = (value: string, fieldName: string, {form, setError, error}: ParentProps) => {
  const fieldConf = form[`${fieldName}Conf`];
  const errorField = `${fieldName}Error`;

  if (fieldConf) {
    const {required, min, regex} = fieldConf;
    if (!!required && value === '') {
      error[errorField] = {error: true, errMsg: 'Pole wymagane.'};
      setError({...error});
      return;
    }
    if (!!min && value.length < min) {
      error[errorField] = {
        error: true,
        errMsg: `Min ${min === 1 ? '1 znak' : min > 4 ? `${min} znaków` : `${min} znaki`}`
      };
      setError({...error});
      return;
    }
    const inputGreaterThan0 = value.length > 0;
    if (regex && inputGreaterThan0) {
      const matchRegex = new RegExp(regex).test(value);
      if (!matchRegex) {
        error[errorField] = {error: true, errMsg: 'Niepoprawna wartość pola'};
        setError({...error});
        return;
      }
    }
  }
};
import {TextField} from '@mui/material';
import React, {useEffect} from 'react';

interface NameProps { 
  error: FormErrors
  setError: React.Dispatch<React.SetStateAction<FormErrors>>,
  form: Form,
  setForm: React.Dispatch<React.SetStateAction<Form>>
}

export const NameField = ({error, setError, form, setForm}: NameProps) => {
  useEffect(() => {
    if(form.nameConf?.defaultValue){
      form.name = form.nameConf?.defaultValue || '';
      setForm({...form});
    }
  }, []);

  const handleChangeName = (value: string) => {
    if (form.nameConf) {
      const {max} = form.nameConf;
      if (max && value.length > max) {
        error.nameError = {
          error: true,
          errMsg: `Max ${max === 1 ? '1 znak' : max > 4 ? `${max} znaków` : `${max} znaki`}`
        };
        setError({...error});
        return;
      }
    }

    if (value.length > 32) {
      error.nameError = {error: true, errMsg: 'Max 32 znaki'};
      setError({...error});
      return;
    }
    if (error.nameError.error) {
      error.nameError = {error: false, errMsg: ''};
      setError({...error});
    }
    form.name = value;
    setForm({...form});
  };

  const handleBlur = (value: string) => {
    if (form.nameConf) {
      const {required, min, regex} = form.nameConf;
      if (!!required && value === '') {
        error.nameError = {error: true, errMsg: 'Pole wymagane.'};
        setError({...error});
        return;
      }
      if (!!min && value.length < min) {
        error.nameError = {
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
          error.nameError = {error: true, errMsg: 'Niepoprawna wartość pola'};
          setError({...error});
          return;
        }
      }
    }
  };

  return(
    <>
      <TextField
        label={'Imie'}
        fullWidth
        value={form.name}
        sx={{marginBottom: '1dvh'}}
        required={form.nameConf?.required}
        onChange={(event) => handleChangeName(event.target.value)}
        onBlur={(event) => handleBlur(event.target.value)}
        error={error.nameError.error}
        helperText={error.nameError.errMsg}
      />
    </>
  );
};
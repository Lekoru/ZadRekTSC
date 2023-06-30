import React from 'react';

export interface ParentProps {
  error: FormErrors
  setError: React.Dispatch<React.SetStateAction<FormErrors>>,
  form: Form,
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
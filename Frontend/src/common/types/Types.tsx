type FieldConfig = {
  min?: number
  max?: number
  regex?: RegExp
  required?: boolean
  defaultValue?: string
}

type Form = {
  name: string
  secondName: string
  email: string
  phone: string
  message: string
  privacy: boolean
  nameConf?: FieldConfig
  secondNameConf?: FieldConfig
  emailConf?: FieldConfig
  phoneConf?: FieldConfig
  messageConf?: FieldConfig
}

type ErrorConfig = {
  error: boolean
  errMsg : string
}

type FormErrors = {
  nameError: ErrorConfig,
  secondNameError: ErrorConfig,
  emailError: ErrorConfig,
  phoneError: ErrorConfig,
  messageError: ErrorConfig,
  privacyError: ErrorConfig,
}
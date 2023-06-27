type FieldConfig = {
  min?: number
  max?: number
  regex?: string
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
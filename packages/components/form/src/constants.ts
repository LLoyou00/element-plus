import { ValidateMessages } from 'async-validator'
import type { InjectionKey } from 'vue'
import type { FormContext, FormItemContext } from './types'

export const formContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')
export const formValidatorMessagesKey: InjectionKey<ValidateMessages> = Symbol(
  'formValidatorMessagesKey'
)

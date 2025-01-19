import type { InjectionKey } from 'vue'
import { computed, inject, nextTick, provide, ref, toRef } from 'vue'
import { useNuiId } from './useNuiId'

export type NuiFieldContext = ReturnType<typeof provideNuiField>

const symbol = Symbol('NuiField') as InjectionKey<NuiFieldContext>

export function provideNuiField(props: {
  id?: string
  name?: string
  error?: string
  state?: 'idle' | 'loading' | 'success' | 'error'
  required?: boolean
  disabled?: boolean
  fieldset?: boolean
}) {
  const id = toRef(props, 'id')
  const name = toRef(props, 'name')
  const error = toRef(props, 'error')
  const state = toRef(props, 'state')
  const required = toRef(props, 'required')
  const disabled = toRef(props, 'disabled')
  const fieldset = toRef(props, 'fieldset')

  const inputMounted = ref(false)
  const labelMounted = ref(false)
  const descriptionMounted = ref(false)
  const errorMounted = ref(false)

  const idInput = useNuiId(() => id?.value ? id?.value : undefined)
  const idLabel = useNuiId(() => id?.value ? `${id?.value}-label` : undefined)
  const idDescription = useNuiId(() => id?.value ? `${id?.value}-desc` : undefined)
  const idError = useNuiId(() => id?.value ? `${id?.value}-error` : undefined)

  const ids = computed(() => {
    return {
      input: inputMounted.value ? idInput.value : undefined,
      label: labelMounted.value ? idLabel.value : undefined,
      description: descriptionMounted.value ? idDescription.value : undefined,
      error: errorMounted.value ? idError.value : undefined,
    }
  })

  const inputAttrs = computed(() => {
    if (props.fieldset) {
      return {}
    }
    return {
      'id': ids.value.input,
      'name': name.value,
      'required': required.value,
      'disabled': disabled.value,
      'aria-labelledby': ids.value.label,
      'aria-describedby': ids.value.description,
      'aria-required': required.value ? 'true' : undefined,
      'aria-invalid': state.value === 'error' ? 'true' : undefined,
      'aria-errormessage': state.value === 'error' && error.value ? ids.value.error : undefined,
    }
  })

  function inputRef(el: any) {
    if (el) {
      nextTick(() => {
        inputMounted.value = true
      })
    }
    else {
      inputMounted.value = false
    }
  }

  function labelRef(el: any) {
    if (el) {
      labelMounted.value = true
    }
    else {
      labelMounted.value = false
    }
  }

  function descriptionRef(el: any) {
    if (el) {
      descriptionMounted.value = true
    }
    else {
      descriptionMounted.value = false
    }
  }

  function errorRef(el: any) {
    if (el) {
      errorMounted.value = true
    }
    else {
      errorMounted.value = false
    }
  }

  const context = {
    id,
    name,
    error,
    state,
    required,
    disabled,
    fieldset,
    ids,
    inputRef,
    inputAttrs,
    inputMounted,
    labelRef,
    labelMounted,
    descriptionRef,
    descriptionMounted,
    errorRef,
    errorMounted,
  }

  provide(symbol, context)

  return context
}

export function useNuiField() {
  const context = inject(symbol)

  if (!context) {
    throw new Error('useNuiField: context not provided')
  }

  return context
}

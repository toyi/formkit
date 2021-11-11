import { FormKitSchemaNode, FormKitSchemaComposable } from '@formkit/core'
import { extend } from '@formkit/utils'

const fieldset: FormKitSchemaComposable = (schema = {}, children = []) => ({
  if: '$slots.wrapper',
  then: '$slots.wrapper',
  else: extend(
    {
      $el: 'fieldset',
      attrs: {
        id: '$id',
        class: '$classes.wrapper',
        'aria-describedby': {
          if: '$help',
          then: '$: "help-" + $id',
          else: undefined,
        },
      },
      children,
    },
    schema
  ) as FormKitSchemaNode,
})

export default fieldset

import React, { memo, ReactElement } from 'react'

declare module 'react' {
  // augment React @types
  function memo<A, B>(
    Component: (props: A) => B
  ): (props: A) => ReactElement | null
  // return type is same as ReturnType<ExoticComponent<any>>
}

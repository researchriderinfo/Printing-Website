import React from 'react'
import Printing from './Printing'
import Lamination from './Lamination'
import DieCutting from './DieCutting'
import Bindary from './Bindary'

const Equipment = () => {
  return (
    <div>
        <Printing></Printing>
        <Lamination></Lamination>
        <DieCutting></DieCutting>
        <Bindary></Bindary>
    </div>
  )
}

export default Equipment
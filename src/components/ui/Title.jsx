import React from 'react'

const Title = ({children}) => {
  return (
    <h3 className='text-center md:text-left text-xl md:text-sm font-semibold mb-3'>{children}</h3>
  )
}

export default Title
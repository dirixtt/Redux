import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'

export default function ValidationError() {
  const { error } = useSelector(state => state.auth)

  const errorMessage = useCallback(() => {
    if (error) {
      return Object.keys(error).map(name => {
        const errorMsg = Array.isArray(error[name]) ? error[name].join(', ') : error[name]
        return `${name} ${errorMsg}`
      })
    }
    return []
  }, [error])

  return (
    <>
      {error && errorMessage().map((error, index) => (
        <div className='alert alert-danger m-1 p-1' role='alert' key={index}>
          {error}
        </div>
      ))}
    </>
  )
}

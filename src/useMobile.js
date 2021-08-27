import { useState, useEffect } from 'react'

function useMobile(breakpoint) {
  const [width, setWidth] = useState(document.body.clientWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(document.body.clientWidth)
    })
  }, [])

  return width <= breakpoint
}

export default useMobile

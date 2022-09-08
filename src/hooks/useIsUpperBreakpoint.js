import { useEffect, useState } from 'react'

const isUpper = (currentWidth, breakpoint) => {
  return currentWidth >= breakpoint
}

const useIsUpperBreakpoint = (currentWidth = window.innerWidth, breakpoint) => {
  const [isUpperBreakpoint, setIsUpperBreakpoint] = useState(
    isUpper(currentWidth, breakpoint)
  )
  useEffect(() => {
    setIsUpperBreakpoint(isUpper(currentWidth, breakpoint))
  }, [currentWidth, breakpoint])

  return [isUpperBreakpoint]
}

export { useIsUpperBreakpoint }

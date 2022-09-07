import { useEffect, useState } from 'react'

const useCurrentWidth = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [currentWidth])

  return { currentWidth }
}

export { useCurrentWidth }

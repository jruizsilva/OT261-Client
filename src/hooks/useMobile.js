import { useEffect, useState } from 'react'

const useMobile = (currentWidth = window.innerWidth) => {
  const [isMobile, setIsMobile] = useState(currentWidth < 1100)
  useEffect(() => {
    setIsMobile(currentWidth < 1100)
  }, [currentWidth])

  return { isMobile }
}

export { useMobile }

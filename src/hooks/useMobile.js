import { useEffect, useState } from 'react'

const useMobile = (currentWidth = window.innerWidth) => {
  const [ismobile, setIsmobile] = useState(currentWidth < 1100)
  useEffect(() => {
    setIsmobile(currentWidth < 1100)
  }, [currentWidth])

  return { ismobile: ismobile.toString() }
}

export { useMobile }

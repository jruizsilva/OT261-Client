import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { httpAxiosInstance } from '../Services/httpAxiosInstance'
import { login } from '../store/slice/user'

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [loading, setLoading] = useState(true)
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token && !user) {
      httpAxiosInstance
        .get('/auth')
        .then(response => {
          const user = response.data
          dispatch(login(user))
          setLoading(false)
        })
        .catch(err => {
          console.dir(err)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [token, user, dispatch])

  return { loading }
}

export { useAuth }

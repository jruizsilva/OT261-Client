import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
import { httpAxiosInstance } from '../../Services/httpAxiosInstance'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAdmin: false
  },
  reducers: {
    login: (state, action) => {
      const user = action.payload
      return { ...state, user, isAdmin: user.roleId === 2 }
    },
    register: (state, action) => {
      const user = action.payload
      return { ...state, user, isAdmin: user.roleId === 2 }
    },
    logout: (state, action) => {
      return { ...state, user: null }
    }
  }
})

/* ======================
   Acciones asincronas ↓↓
   ====================== */
export const loginAsync = values => async dispatch => {
  Swal.fire({
    title: 'Cargando...',
    text: 'Por favor espere...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    }
  })

  try {
    const response = await httpAxiosInstance.post('/auth/login', values)
    const { user, token } = response.data.data
    localStorage.setItem('token', JSON.stringify(`Bearer ${token}`))
    dispatch(login(user))
    Swal.close()
    Swal.fire({
      title: 'Credenciales válidas!',
      text: 'Has iniciado sesión exitosamente.',
      icon: 'success',
      didOpen: () => {
        Swal.hideLoading()
      }
    })
  } catch (error) {
    console.dir(error)
    const errorMessage =
      error.response?.data?.errors[0]?.msg || 'Error al iniciár sesión'
    Swal.close()
    Swal.fire({
      title: 'Credenciales inválidas!',
      text: errorMessage,
      icon: 'error',
      didOpen: () => {
        Swal.hideLoading()
      }
    })
  }
}
export const registerAsync = values => async dispatch => {
  Swal.fire({
    title: 'Cargando...',
    text: 'Por favor espere...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    }
  })
  try {
    const response = await httpAxiosInstance.post('/auth/register', values)
    const { user, token } = response.data.data
    localStorage.setItem('token', JSON.stringify(`Bearer ${token}`))
    dispatch(register(user))
    Swal.close()
    Swal.fire({
      title: 'Usuario registrado!',
      text: 'Cuenta creada exitosamente',
      icon: 'success',
      didOpen: () => {
        Swal.hideLoading()
      }
    })
  } catch (error) {
    console.dir(error)
    const errorMessage =
      error.response?.data?.errors[0]?.msg || 'Error al iniciár sesión'
    Swal.close()
    Swal.fire({
      title: 'Error al crear la cuenta!',
      text: errorMessage,
      icon: 'error',
      didOpen: () => {
        Swal.hideLoading()
      }
    })
  }
}
export const logoutAsync = () => dispatch => {
  localStorage.removeItem('token')
  dispatch(logout())
}

/* ======================
   Acciones sincronas ↓↓
   ====================== */
export const { login, register, logout } = userSlice.actions

export default userSlice.reducer

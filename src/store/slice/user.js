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
      return { ...state }
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
    console.log(response)
    const user = response.data.data.user
    const token = response.data.data.token
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
export const registerAsync = values => dispatch => {
  const { name, surname, email, password } = values
  Swal.fire({
    title: 'Cargando...',
    text: 'Por favor espere...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    }
  })
  /* ======================
       Simulo una peticion a un endpoint con setTimeout ↓↓
       ====================== */
  setTimeout(() => {
    dispatch(register())
    Swal.close()
    Swal.fire({
      title: 'Usuario registrado!',
      text: 'Cuenta creada exitosamente',
      icon: 'success',
      didOpen: () => {
        Swal.hideLoading()
      }
    })
  }, 500)
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

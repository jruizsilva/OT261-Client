import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isAdmin: true,
  },
  reducers: {
    login: (state, action) => {
      return { ...state }
    },
  },
})

/* ======================
   Acciones asincronas ↓↓
   ====================== */
export const loginAsync = values => dispatch => {
  // const { email, password } = values
  Swal.fire({
    title: 'Cargando...',
    text: 'Por favor espere...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  })
  /* ======================
       Simulo una peticion a un endpoint con setTimeout ↓↓
       ====================== */
  setTimeout(() => {
    dispatch(login())
    Swal.close()
    Swal.fire({
      title: 'Credenciales válidas!',
      text: 'Has iniciado sesión exitosamente.',
      icon: 'success',
      didOpen: () => {
        Swal.hideLoading()
      },
    })
  }, 500)
}

/* ======================
   Acciones sincronas ↓↓
   ====================== */
export const { login } = userSlice.actions

export default userSlice.reducer

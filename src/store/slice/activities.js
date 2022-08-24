import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

/* ======================
   HARDCODEO las actividades ↓↓ (deberia venir de la db)
   ====================== */
const listActivities = [
  { id: 1, title: 'Correr' },
  { id: 2, title: 'Nadar' },
  { id: 3, title: 'Futbol' },
];

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    activities: listActivities,
    active: null,
  },
  reducers: {
    deleteActivity: (state, action) => {
      const { activities } = state;
      return {
        ...state,
        activities: activities.filter(
          (activity) => activity.id !== action.payload
        ),
      };
    },
    editActivity: (state, action) => {
      const activityEdited = action.payload;
      const { activities } = state;
      return {
        ...state,
        activities: activities.map((activity) =>
          activity.id === activityEdited.id ? activityEdited : activity
        ),
      };
    },
  },
});

/* ======================
   Acciones asincronas ↓↓
   ====================== */
export const deleteActivityAsync = (id) => (dispatch) => {
  Swal.fire({
    title: 'Cargando...',
    text: 'Por favor espere...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  /* ======================
     Simulo una peticion a un endpoint con setTimeout ↓↓
     ====================== */
  setTimeout(() => {
    dispatch(deleteActivity(id));
    Swal.close();
    Swal.fire({
      title: 'Borrado!',
      text: 'Actividad borrada con exito.',
      icon: 'success',
      didOpen: () => {
        Swal.hideLoading();
      },
    });
  }, 1000);
};

/* ======================
   Acciones sincronas ↓↓
   ====================== */
export const { deleteActivity, editActivity } = activitiesSlice.actions;

export default activitiesSlice.reducer;

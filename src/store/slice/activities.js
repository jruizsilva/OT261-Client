import { createSlice } from '@reduxjs/toolkit';

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
  dispatch(deleteActivity(id));
};

/* ======================
   Acciones sincronas ↓↓
   ====================== */
export const { deleteActivity, editActivity } = activitiesSlice.actions;

export default activitiesSlice.reducer;

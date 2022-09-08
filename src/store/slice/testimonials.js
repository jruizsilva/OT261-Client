import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    { id: 1, name: 'juan perez' },
    { id: 2, name: 'pepito fulanito' },
    { id: 3, name: 'esteban quito'},

]




export const testimonialslice = createSlice({

name:"testimonials",
initialState,
reducers:{
    editTests: (state, action) => {
        const { id, name} = action.payload;
        const editTestimonial = state.find((testimonial) => testimonial.id === id);
        if (editTestimonial) {
            editTestimonial.name = name;
        }
      },
      deleteTests: (state, action) => {
        const deleteTestimonial = state.find((testimonial) => testimonial.id === action.payload);
        if (deleteTestimonial) {
          state.splice(state.indexOf(deleteTestimonial), 1);
        }
      },
    },
})


export const { editTests,  deleteTests,} =  testimonialslice.actions;
export default  testimonialslice.reducer;
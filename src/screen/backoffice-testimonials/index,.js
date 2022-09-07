import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Table, Button} from 'react-bootstrap';
import { deleteTests, editTests } from "../../store/slice/testimonials";
import Swal from 'sweetalert2'
export const BackofficeTestimonials = () =>{

const dispatch = useDispatch();

const testimonials = useSelector((state) => state.testimonials);

const handleDelete = (id) =>{

    Swal.fire({
        title: 'esta seguro?',
        text: "usted esta elminando este testimonio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if(result.isConfirmed) {
            dispatch(deleteTests(id))
          }
      })

}

const handleEdit = () => {
console.log('edit')
//el formulario del edit es parte de otra feature
}




return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th className="text-center d-flex justify-content-center gap-2 ">accion</th>
      </tr>
    </thead>
    <tbody>
    {testimonials.map((test) =>(
         <tr key={test.id}>
        <td >{test.id}</td>
        <td >{test.name}</td>
        <td className="text-center d-flex justify-content-center gap-2 ">
         <Button
         variant="warning"
         size="sm"
        onClick={() => handleEdit(test.id)}
        >
        Editar
         </Button>
        <Button
        variant="danger"
        size="sm"
        onClick={() => handleDelete(test.id)}
        >
        Eliminar
        </Button>
        </td>
        </tr> 
          ))}
    </tbody>
  </Table>

);
}




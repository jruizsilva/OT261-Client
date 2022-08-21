import { icons } from '../../assets';

const adminCardList = [
  { id: 1, title: 'Novedades', image: icons.news },
  { id: 2, title: 'Actividades', image: icons.activities },
  { id: 3, title: 'Categorias', image: icons.categories },
  { id: 4, title: 'Testimonios', image: icons.testimonials },
  { id: 5, title: 'Organización', image: icons.organization },
  { id: 6, title: 'Slides', image: icons.slides },
  { id: 7, title: 'Usuarios', image: icons.users },
  { id: 8, title: 'Miembros', image: icons.members },
  { id: 9, title: 'Editar perfil', image: icons.edit },
];
const userCardList = [{ id: 1, title: 'Editar perfil', image: icons.edit }];

const dropdownMenuLinks = [
  { id: 1, title: 'Inicio', to: '/backoffice' },
  { id: 2, title: 'Editar perfil', to: '#edit-profile-inprocess' },
  { id: 3, title: 'Cerrar sesión', to: '#logout-inprocess' },
];

export { adminCardList, userCardList, dropdownMenuLinks };

import { icons } from '../../assets';

const adminCardList = [
  { id: 1, title: 'Novedades', image: icons.news, to: '/backoffice/news' },
  {
    id: 2,
    title: 'Actividades',
    image: icons.activities,
    to: '/backoffice/activities',
  },
  {
    id: 3,
    title: 'Categorias',
    image: icons.categories,
    to: '/backoffice/categories',
  },
  {
    id: 4,
    title: 'Testimonios',
    image: icons.testimonials,
    to: '/backoffice/testimonials',
  },
  {
    id: 5,
    title: 'Organización',
    image: icons.organization,
    to: '/backoffice/organization',
  },
  { id: 6, title: 'Slides', image: icons.slides, to: '/backoffice/slides' },
  { id: 7, title: 'Usuarios', image: icons.users, to: '/backoffice/users' },
  { id: 8, title: 'Miembros', image: icons.members, to: '/backoffice/members' },
  {
    id: 9,
    title: 'Editar perfil',
    image: icons.edit,
    to: '/backoffice/edit-profile',
  },
];
const userCardList = [
  {
    id: 1,
    title: 'Editar perfil',
    image: icons.edit,
    to: '/backoffice/edit-profile',
  },
];

export { adminCardList, userCardList };

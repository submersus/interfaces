export default {
  items: [
    {
      name: 'Inicio',
      url: '/inicio',
      icon: 'icon-graduation',
      badge: {
        variant: 'info',
        text: 'Nuevo',
      },
    },
    {
      name: 'Informacion',
      url: '/informacion',
      icon: 'icon-info',
    },
    {
      title: true,
      name: 'Solicitudes',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Liberacion Articulo 58',
      url: '/INGRESAURL',
      icon: 'icon-drop',
    },
    {
      name: 'Peticion Estudiantil',
      url: '/INGRESAURL',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Procesos',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Inscripcion Acad.',
      url: '/INGRESAURL',
      icon: 'icon-puzzle',
    },
    {
      name: 'Adicion, Cambio o Retiro',
      url: '/INGRESAURL',
      icon: 'icon-puzzle',
    },
    {
      title: true,
      name: 'Consultas',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Horarios',
      url: '/INGRESAURL',
      icon: 'icon-cursor',
      children: [
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Datos Academicos',
      url: '/INGRESAURL',
      icon: 'icon-cursor',
      children: [
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Datos Administrativos',
      url: '/INGRESAURL',
      icon: 'icon-cursor',
      children: [
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
        {
          name: 'OPCIONES',
          url: '/INGRESAURL',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Materias',
    },
    {
      name: 'Administracion',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Cargar Notas',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Secciones',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Estudiantes Inscritos',
          url: '/404',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Desconectar',
      url: '#',
      icon: 'icon-layers',
      variant: 'danger',
    },
  ],
};

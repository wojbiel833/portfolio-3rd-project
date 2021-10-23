import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as navbarRedux } from './navbarRedux';

import { reducer as productsReducer } from './productsRedux';
const initialState = {
  login: { loggedIn: true, email: 'example2@gmail.com', admin: false },
  products: {
    data: [
      {
        id: '1',
        title: 'Jednorazowe zajęcia grupowe',
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
        photo: 'https://i.ibb.co/99T0Ff6/pexels-andrea-piacquadio-868757.jpg',
        price: 'od 20 zł',
        classType: '',
      },
      {
        id: '2',
        title: 'Zajęcia indywidualne',
        description:
          'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ',
        photo: 'https://i.ibb.co/cvRxx80/pexels-li-sun-2294353.jpg',
        price: 'od 80 zł',
        classType: 'product2',
      },
      {
        id: '3',
        title: 'Zajęcia dla par',
        description:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        photo: 'https://i.ibb.co/1bCvdjJ/pexels-cottonbro-4327162.jpg',
        price: 'od 100 zł',
        classType: '',
      },
      {
        id: '4',
        title: 'Zajęcia na szarfach',
        description:
          'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ',
        photo: 'https://i.ibb.co/3yXS01c/pexels-cottonbro-4323306.jpg',
        price: 'od 100 zł',
        classType: 'product2',
      },
      {
        id: '5',
        title: 'Joga kundalini',
        description:
          ' Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
        photo: 'https://i.ibb.co/tBDLjdQ/pexels-elina-fairytale-3822622.jpg',
        price: 'od 80 zł',
        classType: '',
      },
      {
        id: '6',
        title: 'Medytacja',
        description:
          ' Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
        photo: 'https://i.ibb.co/2d3fGWk/pexels-natalie-3759657.jpg',
        price: 'od 40 zł',
        classType: 'product2',
      },
      {
        id: '7',
        title: 'Zajęcia w plenerze',
        description:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
        photo: 'https://i.ibb.co/syZJSQL/pexels-eternal-happiness-3326362.jpg',
        price: 'od 100 zł',
        classType: '',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
// define reducers
const reducers = {
  login: navbarRedux,
  products: productsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

// https://i.ibb.co/99T0Ff6/pexels-andrea-piacquadio-868757.jpg

// https://i.ibb.co/1bCvdjJ/pexels-cottonbro-4327162.jpg

// https://i.ibb.co/syZJSQL/pexels-eternal-happiness-3326362.jpg
// https://i.ibb.co/cvRxx80/pexels-li-sun-2294353.jpg

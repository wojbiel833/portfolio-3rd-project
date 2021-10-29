import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as navbarRedux } from './navbarRedux';

import { reducer as productsReducer } from './productsRedux';
const initialState = {
  login: { loggedIn: true, email: 'example2@gmail.com', admin: false },
  cart: [
    {
      id: 1,
      title: 'Zajęcia dla par',
      price: 1800,
      priceDescription: '1800zł karnet na 30 spotkań',
      amount: 1,
      additionalComment: 'Początkujący jogni',
    },
    {
      id: 2,
      title: 'Zajęcia w plenerze',
      price: 1000,
      priceDescription: '1000zł karnet na 10 spotkań',
      amount: 2,
      additionalComment: '...',
    },
  ],
  products: {
    data: [
      {
        id: '1',
        title: 'Jednorazowe zajęcia grupowe',
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
        longDescription:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.   ',
        photo1: 'https://i.ibb.co/99T0Ff6/pexels-andrea-piacquadio-868757.jpg',
        photo2: 'https://i.ibb.co/7pKMQCj/pexels-marcus-aurelius-6787440-1.jpg',
        photo3: 'https://i.ibb.co/j3RZbb2/pexels-amin-sujan-1375883-1.jpg',
        price: {
          priceMin: 'od 20 zł',
          priceVariants: [
            { price: 20, variant: 'grupa 20-16 osób - 20 zł/os.' },
            { price: 30, variant: 'grupa 15-10 osób - 30 zł/os.' },
            { price: 40, variant: 'grupa 9-6 osób - 40 zł/os.' },
            { price: 50, variant: 'grupa do 5 osób - 50 zł/os.' },
          ],
        },
        classType: '',
      },
      {
        id: '2',
        title: 'Zajęcia indywidualne',
        description:
          'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ',
        longDescription:
          'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ',
        photo1: 'https://i.ibb.co/cvRxx80/pexels-li-sun-2294353.jpg',
        photo2: 'https://i.ibb.co/HgMLFyp/pexels-li-sun-2294363-1.jpg',
        photo3: 'https://i.ibb.co/D564DD7/pexels-ivan-samkov-6648798-1.jpg',
        price: {
          priceMin: 'od 80 zł',
          priceVariants: [
            { price: 2500, variant: '2500zł karnet na 30 spotkań' },
            { price: 1800, variant: '1800zł karnet na 20 spotkań' },
            { price: 1100, variant: '1100zł karnet na 10 spotkań' },
          ],
        },
        classType: 'product2',
      },
      {
        id: '3',
        title: 'Zajęcia dla par',
        description:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        longDescription:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        photo1: 'https://i.ibb.co/1bCvdjJ/pexels-cottonbro-4327162.jpg',
        photo2:
          'https://i.ibb.co/ZWtz45N/pexels-andrea-piacquadio-3763870-1.jpg',
        photo3: 'https://i.ibb.co/tcqFNwX/pexels-marcus-aurelius-6787542-1.jpg',
        price: {
          priceMin: 'od 100 zł',
          priceVariants: [
            { price: 1800, variant: '1800zł karnet na 30 spotkań' },
            { price: 1400, variant: '1400zł karnet na 20 spotkań' },
            { price: 1000, variant: '1000zł karnet na 10 spotkań' },
          ],
        },
        classType: '',
      },
      {
        id: '4',
        title: 'Zajęcia na szarfach',
        description:
          'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ',
        longDescription:
          'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. ',
        photo1: 'https://i.ibb.co/3yXS01c/pexels-cottonbro-4323306.jpg',
        photo2: 'https://i.ibb.co/G9LHmdz/pexels-cottonbro-4324101-1.jpg',
        photo3: 'https://i.ibb.co/vH4R2Q6/4334-SM-1.png',
        price: {
          priceMin: 'od 80 zł',
          priceVariants: [
            { price: 1200, variant: '1200zł karnet na 30 spotkań' },
            { price: 1000, variant: '1000zł karnet na 20 spotkań' },
            { price: 800, variant: '800zł karnet na 10 spotkań' },
          ],
        },
        classType: 'product2',
      },
      {
        id: '5',
        title: 'Joga kundalini',
        description:
          'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
        longDescription:
          'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
        photo1: 'https://i.ibb.co/tBDLjdQ/pexels-elina-fairytale-3822622.jpg',
        photo2:
          'https://i.ibb.co/tp3tSbP/pexels-rodnae-productions-7978847-1.jpg',
        photo3:
          'https://i.ibb.co/V9dfn05/pexels-los-muertos-crew-8391235-1.jpg',
        price: {
          priceMin: 'od 80 zł',
          priceVariants: [
            { price: 1200, variant: '1200zł karnet na 30 spotkań' },
            { price: 1000, variant: '1000zł karnet na 20 spotkań' },
            { price: 800, variant: '800zł karnet na 10 spotkań' },
          ],
        },
        classType: '',
      },
      {
        id: '6',
        title: 'Medytacja',
        description:
          'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
        longDescription:
          'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
        photo1: 'https://i.ibb.co/2d3fGWk/pexels-natalie-3759657.jpg',
        photo2: 'https://i.ibb.co/wMsJwDw/pexels-klaus-nielsen-6303798.jpg',
        photo3: 'https://i.ibb.co/s98yn9M/pexels-monstera-5384560.jpg',
        price: {
          priceMin: 'od 40 zł',
          priceVariants: [
            { price: 800, variant: '800zł karnet na 30 spotkań' },
            { price: 600, variant: '600zł karnet na 20 spotkań' },
            { price: 400, variant: '400zł karnet na 10 spotkań' },
          ],
        },
        classType: 'product2',
      },
      {
        id: '7',
        title: 'Zajęcia w plenerze',
        description:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
        longDescription:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
        photo1: 'https://i.ibb.co/syZJSQL/pexels-eternal-happiness-3326362.jpg',
        photo2: 'https://i.ibb.co/nRBq1q5/pexels-david-gomes-2647471-1.jpg',
        photo3: 'https://i.ibb.co/PFg5WqT/pexels-evelina-zhu-5035014-1.jpg',
        price: {
          priceMin: 'od 100 zł',
          priceVariants: [
            { price: 1800, variant: '1800zł karnet na 30 spotkań' },
            { price: 1400, variant: '1400zł karnet na 20 spotkań' },
            { price: 1000, variant: '1000zł karnet na 10 spotkań' },
          ],
        },
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

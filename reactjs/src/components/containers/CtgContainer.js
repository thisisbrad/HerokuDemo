import React from 'react';
import CtgCard from '../cards/CtgCard';
import styles from './containers.module.css';
// import API from '../../API';

// ====== State =======
// const [categories, setCategories] = useState([]);
// useEffect(() => {
//   async function getCategories() {
//     // let path = url + {id}.id;
//     // const response = await fetch(path);
//     // const data = await response.json();
//     // const cardList = data.cards;
//     // setCards(cardList)
//     // console.log(cards);
//     let request = await API.get('/categories').then((res) => {
//       const data = res.data;
//       if(data) {
//         setCategories(data);
//       }
//     })
//   }
// })

const categories = [
  {
    name: 'Cookies',
    img: 'https://picsum.photos/100/100',
  },
  {
    name: 'Cakes',
    img: 'https://picsum.photos/100/100?random=2',
  },
  {
    name: 'Pies',
    img: 'https://picsum.photos/100/100?random=3',
  },
];

// This will take the category cards
const CtgContainer = () => (
  <div className={styles.container}>
    {categories.map((cat) => (
      <CtgCard imageSrc={cat.img} ctgName={cat.name} />
    ))}
  </div>
);
export default CtgContainer;

import React from 'react';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import CtgCarousel from '../components/containers/CtgCarousel';
import BackTitle from '../components/containers/BackTitle';
import CtgProdCard from '../components/cards/CtgProdCard';
import prodsDuxContainer from '../store/duxContainers/products/prodsDuxCont';
// import Muffin from '../images/muffin.jpeg';
// import Cookie from '../images/mm-cookies.jpeg';

// const items = [
//   {
//     name: 'Blueberry Muffins',
//     price: 4.95,
//     qty: 2,
//     image: Muffin,
//   },
//   {
//     name: 'Candy Chip Cookies',
//     price: 6.95,
//     qty: 1,
//     image: Cookie,
//   },
// ];

// const Categories = () => (
//   <div>
//     <Header />
//     <BackTitle value={'Categories'}/>
//     <CtgCarousel />
//     <div>
//       {items.map((item) => (
//         <CtgProdCard item={item} />
//       ))}
//     </div>
//     <CtgProdCard />
//     <Footer />
//   </div>
// );
// export default Categories;

// Redux Class - worked as of 2/27/22
class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props };
    props.fetchProds();
    console.log(this.state);
  }

  render() {
    const { products } = this.props;
    console.log(this.props);

    return (
      <div>
        <Header />
        <BackTitle value={'Categories'}/>
        <CtgCarousel />
        <div>
          {products.map((prod) => (
            <CtgProdCard item={prod} />
          ))}
        </div>
        <CtgProdCard />
        <Footer />
    </div>
    );
  }
}
export default prodsDuxContainer(Categories);

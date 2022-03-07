import React from 'react';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import BackTitle from '../components/containers/BackTitle';
import BasicInput from '../components/inputs/BasicInput';
import BasicInputMd from '../components/inputs/BasicInputMd';
import BasicInputSm from '../components/inputs/BasicInputSm';
import inputs from '../components/inputs/inputs.module.css';
import routes from './routes.module.css';
import Checkbox from '../components/inputs/Checkbox';
import DblButton from '../components/buttons/DblButton';
import Select from '../components/inputs/Select';

const Checkout = () => (
  <div className={routes.centeringDiv}>
    <Header />
    <BackTitle />
    <div className={routes.center}>
     <div className={inputs.inputContainer}>
       <BasicInput placeholder={'Card Number'}/>
       <div className={inputs.flex}>
         <BasicInputMd placeholder={'Expiration'}/>
         <BasicInputSm placeholder={'CCV'}/>
       </div>
     </div>
     <div>
       <Checkbox label={'Use profile address'} value={'yes'}/>
       <Checkbox label={'Enter Address'} value={'yes'}/>
     </div>
     <div className={inputs.inputContainer}>
       <BasicInput placeholder={'Address'}/>
       <div className={inputs.flex}>
         <BasicInputMd placeholder={'City'}/>
         <Select />
       </div>
       <BasicInputSm placeholder={'Zip'}/>
     </div>
     <Checkbox label={'Save as profile address'} value={'yes'}/>
    </div>

    <div className={inputs.subtotal}>
      <div className={inputs.subtotalC}>
        <h1>SUBTOTAL:</h1>
        <h1>$15.85</h1>
      </div>
    </div>
    <div className={routes.container}>
      <DblButton />
    </div>
    <Footer />
  </div>
);
export default Checkout;

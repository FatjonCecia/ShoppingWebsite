import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
import '../data/car.js';
import { loadProductsFetch } from '../data/products.js';

//import '../data/backend-practice.js';
async function loadPage(){
    try{
        
        
    
   await loadProductsFetch();
  await new Promise((resolve)=>{
    loadCart(()=>{
        resolve();
    });
});
    } catch(error){
        console.log('Unexpected error.Please try again');
    }
renderOrderSummary();
renderPaymentSummary();

}


loadPage();
    /*


}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/

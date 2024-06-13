// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import image1 from '../../images/2.png';
// import image2 from '../../images/3.png';
// // import '..; // Ensure this path is correct

// const FurryFriends = () => {
//   return (
//     <div>
//       {/* <section>
//         <div className="container py-4 py-xl-5">
//           <div className="col-md-8 col-xl-6 text-center mx-auto">
//             <p className="ab-3">About Us</p>
//             <h2 className="mb-4">Furry Friends Family</h2>
//           </div>
//           <div className="row gy-4 gy-md-0">
//             <div className="col-md-6">
//               <div className="d-flex">
//                 <div className="p-xl-1 m-xl-3 p-md-2 m-md-2">
//                   <img className="rounded img-fluid w-100 fit-cover" src={image2.src} alt="Furry Friend 2" />
//                   <img className="rounded img-fluid w-100 fit-cover" src={image1.src} alt="Furry Friend 1" />
//                 </div>
//                 <div className="p-xl-1 m-xl-3 p-md-2 m-md-2">
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 d-md-flex align-items-md-center">
//               <div>
//                 <h2 className="text-uppercase fw-bold pet-shop-heading">Welcome to Our Pet Shop</h2>
//                 <p className="my-2">At Our Pet Shop, we believe that pets are not just animals; they are beloved members of our families. Our passion for animals and commitment to their well-being drive everything we do.</p>
//                 <p className="my-3"></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//           <section>
// <div class="container py-4 py-xl-5">
//   <div class="col-md-8 col-xl-6 text-center mx-auto">
//   <p class="ab-3">About Us </p>
//     <h2 class="mb-4">Furry Friends Family</h2>
// </div>
//   <div class="row gy-4 gy-md-0">
//       <div class="col-md-6">
//             <div class="d-flex">
//             <div class="p-xl-1 m-xl-3 p-md-2 m-md-2"><img class="rounded img-fluid w-100 fit-cover"  src={image1} /></div>
//             <div class="p-xl-1 m-xl-3 p-md-2 m-md-2"><img class="rounded img-fluid w-100 fit-cover"  src={image2} /></div>
//             </div>
//          </div>
//          <div class="col-md-6 d-md-flex align-items-md-center">
//           <div>
//               <h2 class="text-uppercase fw-bold pet-shop-heading">Welcome to Our Pet Shop</h2>
//               <p class="my-2">At Our Pet Shop, we believe that pets are not just animals; they are beloved members of our families. Our passion for animals and commitment to their well-being drive everything we do.</p>
//               <p class="my-3"></p>
//           </div>
//       </div>
//   </div>
// </div>
// </section>
      
//     </div>
//   );
// };

// export default FurryFriends;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../images/2.png';
import image2 from '../../images/3.png';
import css from './Aboutus.module.css'
{/* <div className={css.cardbody}></div> */}
const FurryFriends = () => {
  return (
    <div>
      <section>
        <div className="container py-4 py-xl-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <p className={css.mb4}>About Us</p>
            <h2 className={css.mb4}>Furry Friends Family</h2>
          </div>
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6">
              <div className="d-flex">
                <div className="p-xl-1 m-xl-3 p-md-2 m-md-2">
                <img className="rounded img-fluid w-100 fit-cover" src={image2.src} alt="Furry Friend 2" />
                </div>
                <div className="p-xl-1 m-xl-3 p-md-2 m-md-2">
                <img className="rounded img-fluid w-100 fit-cover" src={image1.src} alt="Furry Friend 1" />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-md-flex align-items-md-center">
              <div>
                <h2 className={css.petshopheading }>Welcome to Our Pet Shop</h2>
                <p className="my-2">
                  At Our Pet Shop, we believe that pets are not just animals; they are beloved members of our families. Our passion for animals and commitment to their well-being drive everything we do.
                </p>
                <p className="my-3"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FurryFriends;



// import React from 'react';
// import Image from 'next/image';
// import image from '@/app/images/22.png';
// import css from '@/app/homepage/popup/popup.module.css';
// import modal from 'react-bootstrap'
// const ModalsComponent = () => {
//   return (
//     <div>
//       <div
//         className="modal"
//         id="discountModal"
//         aria-labelledby="discountModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-lg">
//           <div className={`modal-content ${css.modalbody}`}>
//             <div className="modal-body">
//               <Image className="img-fluid" src={image} alt="Gallery Item 1" />
//               <div className={css.content}>
//                 <h2 className={css.contenth2}>Get 30% Off</h2>
//                 <p className={css.contentp}>Subscribe now and receive a discount on your first order.</p>
//                 <form>
//                   <div className="input-group mb-3">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Enter Your Email Address"
//                       aria-label="Email"
//                     />
//                     <button className={`btn btn-primary ${css.btnsubscribe}`} type="button">
//                       Subscribe
//                     </button>
//                   </div>
//                 </form>
//                 <p>Signup for exclusive updates</p>
//                 <div className={css.socialicons}>
//                   <i className="fab fa-whatsapp"></i>
//                   <i className="fab fa-facebook"></i>
//                   <i className="fab fa-instagram"></i>
//                   <i className="fab fa-youtube"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalsComponent;

import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import Image from 'next/image';
import image from '@/app/images/22.png';
import css from '@/app/components/popup/popup.module.css';

const Modals = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="discountModalLabel">
        <Modal.Body className={css.modalbody}>
          <Image className="img-fluid" src={image} alt="Gallery Item 1" />
          <div className={css.content}>
            <h2 className={css.contenth2}>Get 30% Off</h2>
            <p className={css.contentp}>Subscribe now and receive a discount on your first order.</p>
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Address"
                  aria-label="Email"
                />
                <Button variant="primary" className={css.btnsubscribe} type="button">
                  Subscribe
                </Button>
              </InputGroup>
            </Form>
            <p>Signup for exclusive updates</p>
            <div className={css.socialicons}>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;




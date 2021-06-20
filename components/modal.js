import React from "react";

const Modal = (props) => {
  let closeButton = null;

  const submitModal = () => {
    alert("sub");
    closeButton.click();
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-outline-dark"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Novo Filme
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Novo Filme
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button
                ref={(ele) => (closeButton = ele)}
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Fechar
              </button>
              {props.hasSubmit && (
                <button
                  onClick={submitModal}
                  type="button"
                  className="btn btn-outline-dark"
                >
                  Salvar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;







// import React from "react";

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);

//     this.closeButton = null;
//   }

//   closeModal() {
//     this.closeButton.click();
//   }
//   submitModal = () => {
//     this.closeModal();
//   };

//   render() {
//     return (
//       <React.Fragment>
//         {this.props.environment === "dev" && (
//           <button
//             type="button"
//             className="btn btn-outline-dark"
//             data-toggle="modal"
//             data-target="#exampleModal"
//           >
//             Criar filme
//           </button>
//         )}

//         <div
//           className="modal fade"
//           id="exampleModal"
//           tabIndex="-1"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">
//                   Criar Filme
//                 </h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">{this.props.children}</div>
//               <div className="modal-footer">
//                 <button
//                   ref={(ele) => (this.closeButton = ele)}
//                   type="button"
//                   className="btn btn-secondary"
//                   data-dismiss="modal"
//                 >
//                   Fechar
//                 </button>
//                 {this.props.hasSubmit && (
//                   <button
//                     onClick={this.submitModal}
//                     type="button"
//                     className="btn btn-outline-dark"
//                   >
//                     Salvar alterações
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Modal;


import ReactDOM from 'react-dom';
const Modal = ({toggle:{toggle, handleToggle},children}) => {
    return ReactDOM.createPortal(

<section id='modal-content'>
{children}
</section>,
document.getElementById("modal")

)
}


//   return (
//     ReactDOM.createPortal(
//     <section id='model'>
//         <button onClick={handleToggle}> {toggle? 'X': 'open'}</button>
//     <article className='container'>
//         <div className='modal-header'>
//             <h1>Login</h1>
//         </div>
//         <div className='modal-content'>
//             <div className="form-group">
//                 <label htmlFor="email">email</label>
//                 <input type="text" className="form-cintrol" placeholder='enter email' /></div>
//             <div className="form-group">
//                 <label htmlFor="">password</label>
//                 <input type="text" className="form-cintrol"  placeholder='enter password'/></div>
//             <div className="form-group">
//                 <button className="form-cintrol"> submit </button>
//         </div>
//         </div>
//         <div className='modal-footer'>Footer</div>
//     </article>
// </section>, 
// document.getElementById("modal")
    
//   )
// }

export default Modal
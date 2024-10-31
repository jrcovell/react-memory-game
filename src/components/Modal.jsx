import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";


const ModalContext = createContext();

//^ keep track of currently open window
function Modal({children}) {
    const [openWindow, setOpenWindow] = useState('');

    const close = () => setOpenWindow('');
    // sets openWindow to name provided (opens = 'high-score' in Modal.Open) the window that matches the name will be displayed
    const open= setOpenWindow;

    return <ModalContext.Provider value={{openWindow, close, open}}>{children}</ModalContext.Provider>
}
function Open({children, opens: opensWindowName}) {

const {open} = useContext(ModalContext);
// returns the cloned version of the children with new props. allows access to the state needed to open the modal.
// sets openWindow to the name provided
return cloneElement(children, {onClick: () => open(opensWindowName)});

}

//^ the display of the modal 
function Window({children, name}) {
const {openWindow, close} = useContext(ModalContext);

if(name !== openWindow) return null;

return createPortal(
    <div onClick={close} className="bg-gray-500 bg-opacity-70 fixed top-0 left-0 right-0 bottom-0 flex justify-center justify-items-end">
        <div  onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }} className="bg-white px-5 py-5 rounded-3xl w-96 h-82 h-min">  
            <div className="">{children}</div> 
            </div>
    </div>,

 document.body
)
}

// assign Open and Window to Modal
Modal.Open = Open; 
Modal.Window = Window;

export default Modal;

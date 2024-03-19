import {ReactElement} from "react";


interface IModalProps {
  children: ReactElement;
  name: string;
}

function Modal({children, name}: IModalProps) {
  return (
    <div className={'modal'}>
      <h3 className={'modal-name'}>{name}</h3>
      {children}
    </div>
  )
}

export default Modal;

import React from 'react';

const Modal = ({ onClose, project, languages, description }) => {
    return (
        <div className="modal">
            <div className='modal-container'>
                <div className='modal-content'>
                    <h3 className="modal-title">{project}</h3>
                    <p><span>Languages:</span>{languages}</p>
                    <p>{description}</p>
                    <button onClick={onClose} type="button">Close</button>
                </div>
                <div className='modal-right'>
                    <img className='modal-img' src={require(`../../assets/images/${project}.png`)} alt="current category" />
                </div>
            </div>
        </div>
    );
}

export default Modal;
import React from 'react'
import icons from '../icons'
import helper from '../../utils/helper'

const { cancel, prev, next, like } = icons
const { formatDate } = helper

const Modal = ({ visible, onCancel, data, currentIndex, setCurrentIndex }) => {

    const handleNextClick = () => {
        const nextIndex = (currentIndex + 1) % data.length;
        setCurrentIndex(nextIndex);
    };

    const handlePrevClick = () => {
        const prevIndex = (currentIndex - 1 + data.length) % data.length;
        setCurrentIndex(prevIndex);
    };


    return (
        <>
            {visible && <section className='modal'>
                <div className='modal-content'>
                    <button className='nav_btn' onClick={handlePrevClick}>
                        {prev}
                    </button>
                    <div style={{
                        backgroundImage: `url(${data[currentIndex]?.url}.jpg)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        height: '100%',
                        width: '100%',
                        position: 'relative'
                    }}>
                        <button className='modal_close_icon' onClick={onCancel}>
                            {cancel}
                        </button>
                        <div className="overlay">
                            <div className="description" >{data[currentIndex]?.description}</div>
                            <div className="user-info">
                                <div className="username">{data[currentIndex]?.user.first_name}</div>
                                <div className="date">{formatDate(data[currentIndex]?.created_at)}</div>
                                <div className="likes">
                                    {like}
                                    <span className="like-count">{data[currentIndex]?.likes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='nav_btn' onClick={handleNextClick}>
                        {next}
                    </button>
                </div>
            </section>}
        </>

    )
}

export default Modal
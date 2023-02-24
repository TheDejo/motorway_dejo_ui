import React, { useState } from 'react';
import useFetchImages from '../../components/hooks/useGetImages';
import Modal from '../../components/Modal';
import icons from '../../components/icons'
import constants from './constants';

const { like } = icons
const { SCREEN_TEXTS } = constants

const HomeSection = () => {
    const images = useFetchImages()
    const [visible, setVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <section className='thumbnail-container'>
            {
                images?.map(({ id, url, likes, user }, idx) => (
                    <button onClick={() => {
                        setVisible(true)
                        setCurrentIndex(idx)
                    }} key={id} className="thumbnail">
                        <span className='content-container'>
                            <img src={`${url}.jpg`} alt={url} className='main-image' />
                            <span className='avatar-like-wrapper'>
                                <img src={`${user.profile_image}.webp`} alt={user.profile_image} className='avatar' />
                                <span className='interactions'>
                                    {like}
                                    <p>
                                        {likes}{SCREEN_TEXTS.likes}
                                    </p>
                                </span>
                            </span>
                        </span>
                    </button>
                ))
            }
            <Modal visible={visible} onCancel={() => {
                setVisible(false)
            }} currentIndex={currentIndex} data={images} setCurrentIndex={setCurrentIndex} />
        </section>
    );
}

export default HomeSection;

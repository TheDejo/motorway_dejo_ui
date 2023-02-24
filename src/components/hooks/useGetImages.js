import { useEffect, useMemo, useState } from 'react';
import constants from '../../config/constants';

const { API_ROUTE } = constants;
const useFetchImages = () => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch(API_ROUTE.images);
                const data = await response.json();
                console.log('Success:', data);
                setImages(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchImages();
    }, []);


    const memoizedImages = useMemo(() => images, [images]);

    return memoizedImages
}

export default useFetchImages

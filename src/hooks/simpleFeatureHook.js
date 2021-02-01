import React, {useEffect, useState} from 'react';
import Api from '../api'


export const useFeatures = () => {
    const [state, setState] = useState(null)
    useEffect(() => {
        Api.loadOnce()
            .then((d) => {
                debugger
                setState(d)
            })
    }, []);

    return state;
};


export default useFeatures;
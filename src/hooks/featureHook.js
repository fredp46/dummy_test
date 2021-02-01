import React, {useEffect, useContext} from 'react';
import { Context } from '../context/featureContext';

import Api from '../api'


export const useFeatures = () => {

    const [state, dispatch] = useContext(Context);

    return state.features;
};


export default useFeatures;
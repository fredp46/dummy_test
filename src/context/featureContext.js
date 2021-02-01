import React, { createContext, useReducer, useEffect } from 'react';
import Api from '../api'



const initialState = {
    loading: false,
    loaded: false,
    features: null
};

const SET_FEATURES = 'SET_FEATURES'
const SET_LOADING = 'SET_LOADING'

export const setFeatures = (payload) => {
    return {
        type: SET_FEATURES,
        payload
    }
}

export const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload
    }
}

const reducer = (state, { type, payload }) => {
    switch(type) {
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        case SET_FEATURES:
            return {
                ...state,
                loaded: true,
                features: payload
            }
    }
}

export const Context = createContext(initialState);


export const FeatureProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Fired on component did mount
    useEffect(() => {
        async function loadFeatures() {
            if(!state.loading && !state.loaded) {
                dispatch(setLoading(true))

                // TODO: handle errpr
                const features = await (new Api()).dummyApi()
                dispatch(setFeatures(features))
                dispatch(setLoading(false))
            }
        }
        loadFeatures();
    }, []);

    return  <Context.Provider value={[state, dispatch]}>
        {children}
    </Context.Provider>
}
import { AXIOS_START, AXIOS_FIELD, AXIOS_SUCCSES } from './actionType'
import axios from 'axios'

export const getData = async (dispatch , cityValue) => {
    const key = '683b281f59d954120c6c1406d3ba65f2'
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${key}`
    dispatch(axiosStart)
    const request = await axios.get(apiUrl)
        .then(result => {
            return dispatch(axiosSuccses(result.data))
        })
        .catch(error => {
            dispatch(axiosFiled(error))
        })
    return request.payload
}


export const axiosStart = () => ({
    type: AXIOS_START
})

export const axiosSuccses = (data) => ({
    type: AXIOS_SUCCSES,
    payload: data
})

export const axiosFiled = (message) => ({
    type: AXIOS_FIELD,
    payload: message
})
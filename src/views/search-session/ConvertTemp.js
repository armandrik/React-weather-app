import React from 'react'
import { UilCelsius, UilFahrenheit } from "@iconscout/react-unicons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ConvertTemp = ({ convertCelsius, convertFahrenheit }) => {

    const celsius = () => {
        toast.success('Changed to celsius', {
            position: "bottom-right",
            autoClose: 4000,
            theme: 'dark',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        convertCelsius()
    }

    const fahrenheit = () => {
        toast.success('Changed to fahrenheit', {
            position: "bottom-right",
            autoClose: 4000,
            theme: 'dark',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        convertFahrenheit()
    }

    return (
        <div className='convert-container'>
            <UilCelsius color="#ffffff" className='icon convert-icon' size={30} onClick={() => celsius()} />
            <UilFahrenheit color="#ffffff" className='icon convert-icon' size={30} onClick={() => fahrenheit()} />
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </div>
    )
}

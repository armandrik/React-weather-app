import React from 'react'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Search = ({ cityValue }) => {

    const inputRef = React.useRef();

    const getCity = () => {
        const name = inputRef.current.value;
        toast.info(`Getting Data for ${name}`, {
            position: "bottom-right",
            autoClose: 4000,
            theme: 'dark',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        if (isNaN(name)) {
            cityValue(name)
            toast.success('Success', {
                position: "bottom-right",
                autoClose: 4000,
                theme: 'dark',
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            inputRef.current.value = ''
        } else {
            toast.error('Enter city Name', {
                position: "bottom-right",
                autoClose: 4000,
                theme: 'dark',
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const localWeather = () => {
        // this code can give you lon and lat of your local location
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition((position) => {
        //         let lon = position.coords.longitude;
        //         let lat = position.coords.latitude;
        //         console.log('lon' , lon , 'lat' ,lat);
        //     })
        // }
        toast.info('Getting Data for your Location', {
            position: "bottom-right",
            autoClose: 4000,
            theme: 'dark',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        axios.get('https://ipinfo.io/json?token=22c58820e59310')
            .then(result => {
                const response = result.data.city;
                cityValue(response)
                toast.success('Success', {
                    position: "bottom-right",
                    autoClose: 4000,
                    theme: 'dark',
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(error => {
                toast.error('Erorr', {
                    position: "bottom-right",
                    autoClose: 4000,
                    theme: 'dark',
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }

    return (
        <div className='search-container'>
            <div className='search'>
                <input type='text' placeholder='Search' ref={inputRef} />
                <UilSearch color="#ffffff" className='icon' size={35} onClick={() => getCity()} />
                <UilLocationPoint color="#ffffff" className='icon' size={35} onClick={() => localWeather()} />
            </div>
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
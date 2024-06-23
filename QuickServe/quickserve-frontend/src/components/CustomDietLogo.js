import React from 'react'

const CustomDietLogo = ({fill}) => {
    return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.93994" y="3.5" width="93" height="93" stroke={fill || '#fff'} stroke-width="7" />
            <rect x="22.7983" y="22.3584" width="55.2832" height="55.2832" rx="27.6416" fill={fill || '#fff'} />
        </svg>
    );
}

export default CustomDietLogo;
import React from 'react'

const Speaker = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path d="M7,2 L17,2 C18.1045695,2 19,2.8954305 19,4 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,4 C5,2.8954305 5.8954305,2 7,2 Z M12,19 C9.790861,19 8,17.209139 8,15 C8,12.790861 9.790861,11 12,11 C14.209139,11 16,12.790861 16,15 C16,17.209139 14.209139,19 12,19 Z M12,7 C11.1715729,7 10.5,6.32842712 10.5,5.5 C10.5,4.67157288 11.1715729,4 12,4 C12.8284271,4 13.5,4.67157288 13.5,5.5 C13.5,6.32842712 12.8284271,7 12,7 Z" fill="currentColor" />
                <path d="M12,17 C13.1045695,17 14,16.1045695 14,15 C14,13.8954305 13.1045695,13 12,13 C10.8954305,13 10,13.8954305 10,15 C10,16.1045695 10.8954305,17 12,17 Z" fill="currentColor" opacity="0.3" />
            </g>
        </svg>
    )
}

export default Speaker
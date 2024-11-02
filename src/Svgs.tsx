import React from "react";

export const CartSvg = ( className:string , fill:string = "#69707D" ) => {
    return (
        <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g id="Group_14">
                <path
                    id="Shape"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.86313 3.64139H20.9246C21.5077 3.64139 21.9352 4.19014 21.7941 4.75489L19.9732 12.0381C19.8781 12.4181 19.5473 12.6924 19.1563 12.7153L4.83452 13.557C5.09057 14.1554 5.68378 14.5661 6.36452 14.5661H16.3727C17.8709 14.5661 19.0897 15.7849 19.0897 17.2831C19.0897 18.7812 17.8709 20 16.3727 20C14.4955 20 13.1758 18.1275 13.818 16.3584H8.91319C9.55625 18.1298 8.23365 20 6.35846 20C4.09916 20 2.83011 17.3851 4.21903 15.6114C3.44867 15.0012 3.00149 14.1031 2.92835 13.2755C1.79349 0.631508 1.84298 1.18296 1.9492 2.36648L1.94921 2.36663L1.94928 2.36744C2.02069 3.1631 2.11759 4.24273 1.89764 1.79232H0.896159C0.401223 1.79232 0 1.39109 0 0.896159C0 0.401223 0.401223 0 0.896159 0H2.71694C3.18081 0 3.56803 0.354025 3.60951 0.816059L3.86313 3.64139ZM5.43388 17.2831C5.43388 17.7929 5.84867 18.2077 6.35846 18.2077C6.86829 18.2077 7.28308 17.7929 7.28308 17.2831C7.28308 16.7732 6.86829 16.3584 6.35846 16.3584C5.84867 16.3584 5.43388 16.7732 5.43388 17.2831ZM16.3727 18.2077C15.8629 18.2077 15.4481 17.7929 15.4481 17.2831C15.4481 16.7732 15.8629 16.3584 16.3727 16.3584C16.8825 16.3584 17.2973 16.7732 17.2973 17.2831C17.2973 17.7929 16.8825 18.2077 16.3727 18.2077ZM4.59328 11.7758L18.394 10.9648L19.7769 5.43367H4.02401L4.59328 11.7758Z"
                    fill={fill}
                />
            </g>
        </svg>
    );
};
export const trashSvg = ( className:string, fill:string = "#C3CAD9") => {
    return (
        <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z"
                fill={fill}
            />
            <mask
                id="mask0_0_81"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="14"
                height="16"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z"
                    fill="none"
                />
            </mask>
            <g mask="url(#mask0_0_81)"></g>
        </svg>
    );
};
export const logoSvg = ( className:string, fill:string = '#1D2026' ) => {
    return (
        <svg
            width="138"
            height="20"
            viewBox="0 0 138 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g id="sneakers 2">
                <path
                    id="sneakers"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M82.2973 10.9554L88.8261 20H83.5998L79.2425 13.9633L76.2223 16.9386V19.9543H72.0351V0H76.2223V11.2226L83.0577 4.46748H88.8847L82.2973 10.9554ZM51.6033 14.5951C51.1726 17.9292 48.48 20 43.3858 20C38.0697 20 35.0497 17.3232 35.0497 12.1544C35.0497 7.0812 38.1465 4.30913 43.3858 4.30913C45.5806 4.30913 47.3254 4.85922 48.637 5.77393V5.76839C51.6343 7.79242 51.903 11.0789 51.6627 13.2081H51.5082L51.5082 13.2092H39.1364C39.4244 15.2853 40.6647 16.3143 43.3858 16.3143C45.8985 16.3143 47.1427 15.615 47.5294 14.5951H51.6033ZM8.21683 20C12.9782 20 15.7358 19.2467 15.7358 15.3935C15.7358 11.9945 12.3557 11.2222 9.07597 10.7123L8.51536 10.6271L8.23701 10.5855L7.88789 10.5332C5.18668 10.1276 4.70681 9.74502 4.70681 9.06204C4.70681 8.5842 5.19774 7.73096 7.54955 7.73096C10.0047 7.73096 11.043 8.37823 11.043 9.60134V9.73506H15.3245V9.60217C15.3245 7.21298 13.9744 4.36394 7.54955 4.36394C1.59817 4.36394 0.348734 6.94831 0.348734 9.11603C0.348734 12.2131 3.11186 13.2017 7.57249 13.7914C7.78257 13.8188 8.00481 13.8454 8.23065 13.872C9.89969 14.0688 11.4032 14.2911 11.4032 15.4575C11.4032 16.4672 9.78802 16.6787 8.10515 16.6787C5.30831 16.6787 4.32121 16.0865 4.32121 14.759V14.6253H0.00210059L0.000442123 14.9265L0 15.2433C0.00845421 16.0334 0.117991 17.1559 1.05693 18.105C2.30277 19.3619 4.71152 20 8.21683 20ZM21.4271 20V12.5096C21.4271 10.4061 21.9736 8.08726 25.6033 8.08726C29.4137 8.08726 29.3856 10.7183 29.3716 12.0247L29.3706 12.1287L29.3701 20H33.551V12.2322C33.5501 9.96844 33.3754 4.46555 26.819 4.46555C24.0412 4.46555 22.627 5.37748 21.6244 6.74594H21.4271V4.46748H17.2205V20H21.4271ZM47.4846 10.4261H39.2972C39.7826 8.85164 41.0605 7.99479 43.3858 7.99479C46.3803 7.99479 47.1407 9.26248 47.4846 10.4261ZM70.499 4.45724V20H66.2905V17.8312H66.1589C65.1088 19.1825 63.3391 20 60.4251 20C53.9161 20 53.1831 14.3213 53.1831 12.2286L53.1839 12.0917C53.2125 9.74991 54.0044 4.45724 60.4369 4.45724C63.3054 4.45724 65.0612 5.36281 66.1141 6.73957L66.2905 6.73957V4.45724H70.499ZM61.6455 16.3766C57.6492 16.3766 57.1984 13.3454 57.1984 12.2286C57.1984 11.0194 57.6235 8.08062 61.6527 8.08062C65.2843 8.08062 66.0273 10.1249 66.0273 12.2286C66.0273 14.5796 65.2851 16.3766 61.6455 16.3766ZM98.7256 20C103.82 20 106.512 17.9292 106.943 14.5951H102.869C102.482 15.615 101.238 16.3143 98.7256 16.3143C96.0045 16.3143 94.7642 15.2853 94.4762 13.2092H106.848V13.2081H107.003C107.243 11.0789 106.974 7.79242 103.977 5.76839V5.77393C102.665 4.85922 100.92 4.30913 98.7256 4.30913C93.4863 4.30913 90.3896 7.0812 90.3896 12.1544C90.3896 17.3232 93.4095 20 98.7256 20ZM94.6371 10.4261H102.824C102.481 9.26248 101.72 7.99479 98.7256 7.99479C96.4004 7.99479 95.1225 8.85164 94.6371 10.4261ZM112.76 20V13.0306C112.76 10.9269 113.691 8.48814 116.81 8.48814C118.14 8.48814 119.203 8.72429 119.595 8.8342L120.265 4.85839C120.188 4.84144 120.109 4.82367 120.028 4.80546L120.028 4.80542C119.345 4.65147 118.519 4.46555 117.508 4.46555C114.843 4.46555 113.886 5.2601 113.022 6.74788H112.76V4.46555H108.551V20H112.76ZM137.5 15.3935C137.5 19.2467 134.742 20 129.981 20C126.476 20 124.067 19.3619 122.821 18.105C121.882 17.1559 121.773 16.0334 121.764 15.2433L121.765 14.9265L121.766 14.6253H126.085V14.759C126.085 16.0865 127.073 16.6787 129.869 16.6787C131.552 16.6787 133.167 16.4672 133.167 15.4575C133.167 14.2911 131.664 14.0688 129.995 13.872C129.769 13.8454 129.547 13.8188 129.337 13.7914C124.876 13.2017 122.113 12.2131 122.113 9.11603C122.113 6.94831 123.362 4.36394 129.314 4.36394C135.739 4.36394 137.089 7.21298 137.089 9.60217V9.73506H132.807V9.60134C132.807 8.37823 131.769 7.73096 129.314 7.73096C126.962 7.73096 126.471 8.5842 126.471 9.06204C126.471 9.74502 126.951 10.1276 129.652 10.5332L130.001 10.5855L130.28 10.6271L130.84 10.7123C134.12 11.2222 137.5 11.9945 137.5 15.3935Z"
                    fill={fill}
                />
            </g>
        </svg>
    );
};
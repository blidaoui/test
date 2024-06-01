'use client'

import { IconType } from "react-icons";

interface ButtonProps{
    label:string,
    disabled?:boolean,
    outline?:boolean,
    small?:boolean,
    ModalInfo?:boolean,
    custom?:string,
    type?:string,
    href?:string,
    Icon?:IconType,
    onClick?:(e:React.MouseEvent<HTMLButtonElement>) =>void
    
}
const Button :React.FC<ButtonProps> = ( 
    {label,
    disabled,
    outline,
    href,
    small,
    ModalInfo,
    custom,

    onClick}) => {

    return ( <button
        onClick={onClick}
        disabled={disabled} 
        type="button"
        className="flex justify-end text-xl font-medium bg-bgpink text-pink py-1 px-1 lg:px-4 navbutton rounded-full hover:text-white hover:bg-pink">
        {label}
    </button> );
}

export default Button;
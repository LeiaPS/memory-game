import React from "react";

type props = {
    label: string
    icon?: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
} 
export const SidebarResetBtn = ({label, icon, onClick}: props,) => {
    return (
        <button className=" d-flex justify-content-center btn btn-warning sidebar-reset-btn" onClick={onClick}>
           <img className="mr-2" src={icon} alt="" />
           <label className="ml-2">{label}</label> 
        </button>
    )
}
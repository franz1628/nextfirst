import React from "react";

type ButtonColor = "primary" | "success" | "info" | "danger" | "warning" | "light" | "dark";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    color: ButtonColor;
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, color, children,icon }) => {

    const colorClass = {
        primary: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400",
        success: "bg-green-500 hover:bg-green-600 focus:ring-green-400",
        info: "bg-teal-500 hover:bg-teal-600 focus:ring-teal-400",
        danger: "bg-red-500 hover:bg-red-600 focus:ring-red-400",
        warning: "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400",
        light: "bg-gray-200 hover:bg-gray-300 focus:ring-gray-400",
        dark: "bg-black hover:bg-gray-800 focus:ring-gray-600"
    };

    const clase = `${colorClass[color]} text-white focus:outline-none focus:ring-2 focus:ring-opacity-75 py-2 px-4 rounded-lg flex items-center justify-center`;

    return (
        <button className={clase} type="button" onClick={onClick}>
            {icon}
            {children}
        </button>
    );
};

export default Button;

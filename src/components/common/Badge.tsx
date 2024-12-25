interface BadgeProps {
    children: React.ReactNode;
    color: "primary" | "success" | "info" | "danger" | "warning" | "light" | "dark";
}

const Badge: React.FC<BadgeProps> = ({ children, color }) => { 
    const colorClass = {
        primary: "bg-blue-500 text-white",
        success: "bg-green-500 text-white",
        info: "bg-teal-500 text-white",
        danger: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-white",
        light: "bg-gray-200 text-gray-800",
        dark: "bg-black text-white"
    };
    const clase = `${colorClass[color]} px-2 py-1 rounded-md text-sm font-semibold`;
    return <span className={clase}>{children}</span>;
}

export default Badge;
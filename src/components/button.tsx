import { ReactNode } from "react";

type ButtonProps = {
    children: string;
    className?: string;
    icon?: ReactNode;
    onClick?: () => void;
}
const Button = ({
    children,
    className,
    icon,
    onClick,
}: ButtonProps) => {
    const baseClassName = "bg-slate-900 flex gap-2 items-center h-fit font-bold border-2 text-white px-3 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-slate-700"
    const buttonClassName = `${baseClassName} ${className}`

    return (
        <button
            className={buttonClassName}
            onClick={onClick}
        >
            { icon }
            { children }
        </button>
    )
}

export default Button;
interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Button({ children, className, color }: ButtonProps) {
    const definedColor = color ?? 'gray';

    return (
        <button className={`
            bg-gradient-to-r from-${color}-400 to-${color}-700
            text-white px-4 py-2 rounded-md
            ${className}
        `}>
            {children}
        </button>
    );
}
interface ButtonProps {
  color?: "green" | "blue" | "gray";
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  color,
  onClick,
}: ButtonProps) {
  const definedColor = color ?? "gray";

  return (
    <button
      className={`
            bg-gradient-to-r from-${definedColor}-400 to-${definedColor}-700
            text-white px-4 py-2 rounded-md
            ${className}
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

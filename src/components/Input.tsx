interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    readOnly?: boolean
    className?: string
    onChange?: (value: any) => void
}

export default function InputProps({ text, type, value, readOnly, onChange, className }: InputProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <label className="mb-2">
                {text}
            </label>
            <input
                type={type ?? 'text'}
                value={value}
                readOnly={readOnly}
                onChange={event => onChange(event?.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2
                    ${readOnly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    );
}
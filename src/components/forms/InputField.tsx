interface InputProps {
    label?: string;
    type?: string;
    name?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
}

const InputField : React.FC<InputProps> = ({label, type, name, value, onChange, placeholder, error}) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-200'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id={name}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}    
        </div>
    )
}

export default InputField;
interface SelectFieldProps {
    label?: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
    value?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, children, onChange ,value}) => {
    return (
        <div className="mb-4">
            <label 
                className="block text-gray-700 text-sm font-semibold mb-2" 
                htmlFor={name}
            >
                {label}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={(e)=>onChange(e)}
                className="block w-full px-4 py-3 mt-1 text-sm leading-tight text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
                {children}
            </select>
        </div>
    )
}

export default SelectField;
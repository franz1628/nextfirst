interface FormProps {
    children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({children}) => {
    return <form className="w-full max-w-lg mx-auto">
        {children}
    </form>
}

export default Form;
interface InputProps {
  label: string;
  id: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute; // More specific type for 'type'
  name?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange handler
}

const CustomInput: React.FC<InputProps> = ({
  label,
  id,
  placeholder,
  type = 'text',
  name,
  required,
  disabled,
  autoComplete,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name ?? id}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        required={required} 
        disabled={disabled}
        autoComplete={autoComplete} 
      />
    </div>
  );
};

export default CustomInput;
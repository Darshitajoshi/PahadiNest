/**
 * Input Component
 * Props:
 * - label
 * - placeholder
 * - type
 * - value
 * - onChange
 * - error
 */

const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
      />

      {error && (
        <span className="text-red-500 text-sm">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
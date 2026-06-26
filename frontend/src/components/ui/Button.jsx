/**
 * Button Component
 * Props:
 * - variant: primary, secondary, outline
 * - size: sm, md, lg
 * - disabled: boolean
 * - onClick: function
 * - className: additional Tailwind classes
 * - type: button | submit | reset
 */

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
  type = "button",
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white",

    secondary:
      "bg-slate-700 hover:bg-slate-800 text-white",

    outline:
      "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        ${variants[variant]}
        ${sizes[size]}
        rounded-2xl
        font-semibold
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
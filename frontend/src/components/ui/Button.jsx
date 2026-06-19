/**
 * Button Component
 * Props:
 * - variant: primary, secondary, outline
 * - size: sm, md, lg
 * - disabled: boolean
 * - onClick: function
 */

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) => {
  const variants = {
    primary: "bg-green-600 text-white",
    secondary: "bg-gray-600 text-white",
    outline: "border border-gray-500 text-gray-700",
  };

  const sizes = {
    sm: "px-3 py-1",
    md: "px-5 py-2",
    lg: "px-7 py-3",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} rounded-lg`}
    >
      {children}
    </button>
  );
};

export default Button;
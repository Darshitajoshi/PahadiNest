/**
 * Toast Component
 * Props:
 * - message
 */

const Toast = ({ message }) => {
  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
      {message}
    </div>
  );
};

export default Toast;
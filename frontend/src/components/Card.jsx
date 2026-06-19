function Card({ image, title, description }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 max-w-md mx-auto">

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover object-center"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h2>

        <p className="text-gray-600 dark:text-slate-300 text-sm leading-6 mb-4">
          {description}
        </p>

        <button className="bg-slate-900 dark:bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-800 dark:hover:bg-green-700 transition">
          View Details
        </button>

      </div>

    </div>
  );
}

export default Card;
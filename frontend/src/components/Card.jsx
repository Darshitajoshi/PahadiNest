function Card({
  image,
  name,
  location,
  price,
  rating,
  reviews,
  amenities,
  description,
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        {/* Rating */}
        <div className="flex justify-between items-center mb-2">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ {rating}
          </span>

          <span className="text-gray-500 text-sm">
            {reviews} Reviews
          </span>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {name}
        </h2>

        {/* Location */}
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          📍 {location}
        </p>

        {/* Description */}
        <p className="text-gray-600 dark:text-slate-300 text-sm leading-6 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {amenities?.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="bg-green-50 dark:bg-slate-700 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">

          <div>
            <p className="text-2xl font-bold text-green-600">
              ₹{price}
            </p>

            <p className="text-xs text-gray-500">
              per night
            </p>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default Card;
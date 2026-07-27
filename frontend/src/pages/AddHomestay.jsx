import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddHomestay() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    rating: "",
    reviews: "",
    image: "",
    description: "",
    amenities: "",
  });

  // Protect this page
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Session expired. Please login again.");
      navigate("/login");
      return;
    }

    const data = {
      ...formData,
      price: Number(formData.price),
      rating: Number(formData.rating),
      reviews: Number(formData.reviews),
      amenities: formData.amenities
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/homestays",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("✅ Homestay Added Successfully");

        setFormData({
          name: "",
          location: "",
          price: "",
          rating: "",
          reviews: "",
          image: "",
          description: "",
          amenities: "",
        });

        navigate("/dashboard");
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex justify-center items-center py-12 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Add New Homestay
        </h1>

        <input
          className="w-full border rounded-lg p-3 mb-4 dark:bg-slate-700 dark:text-white"
          name="name"
          placeholder="Homestay Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4 dark:bg-slate-700 dark:text-white"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4 dark:bg-slate-700 dark:text-white"
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4 dark:bg-slate-700 dark:text-white"
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4 dark:bg-slate-700 dark:text-white"
          name="reviews"
          type="number"
          placeholder="Reviews"
          value={formData.reviews}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4 dark:bg-slate-700 dark:text-white"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4 dark:bg-slate-700 dark:text-white"
          name="amenities"
          placeholder="Amenities (comma separated)"
          value={formData.amenities}
          onChange={handleChange}
        />

        <textarea
          className="w-full border rounded-lg p-3 mb-6 dark:bg-slate-700 dark:text-white"
          rows="4"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl transition"
        >
          Add Homestay
        </button>
      </form>
    </div>
  );
}

export default AddHomestay;
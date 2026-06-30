import { useState } from "react";
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      price: Number(formData.price),
      rating: Number(formData.rating),
      reviews: Number(formData.reviews),
      amenities: formData.amenities
        .split(",")
        .map((item) => item.trim()),
    };

    const response = await fetch(
      "http://localhost:5000/api/homestays",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      alert("✅ Homestay Added Successfully");
      navigate("/dashboard");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center py-12">

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-2xl"
      >

        <h1 className="text-3xl font-bold mb-8 text-center">
          Add New Homestay
        </h1>

        <input
          className="w-full border rounded-lg p-3 mb-4"
          name="name"
          placeholder="Homestay Name"
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4"
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4"
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4"
          name="reviews"
          type="number"
          placeholder="Reviews"
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />

        <input
          className="w-full border rounded-lg p-3 mb-4"
          name="amenities"
          placeholder="Amenities (comma separated)"
          onChange={handleChange}
        />

        <textarea
          className="w-full border rounded-lg p-3 mb-6"
          rows="4"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <button
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl"
        >
          Add Homestay
        </button>

      </form>

    </div>
  );
}

export default AddHomestay;
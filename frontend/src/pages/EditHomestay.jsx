import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditHomestay() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    rating: "",
    reviews: "",
    image: "",
    amenities: "",
    description: "",
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

  // Fetch homestay details
  useEffect(() => {
    const fetchHomestay = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/homestays/${id}`
        );

        const data = await response.json();

        if (response.ok) {
          setFormData({
            ...data.data,
            amenities: data.data.amenities?.join(", ") || "",
          });
        } else {
          alert("Homestay not found");
          navigate("/dashboard");
        }
      } catch (error) {
        console.error(error);
        alert("Failed to load homestay");
      }
    };

    fetchHomestay();
  }, [id, navigate]);

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

    const updatedData = {
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
        `http://localhost:5000/api/homestays/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("✅ Homestay Updated Successfully");
        navigate("/dashboard");
      } else {
        alert(result.message || "Failed to update homestay");
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
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Edit Homestay
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
        >
          Update Homestay
        </button>
      </form>
    </div>
  );
}

export default EditHomestay;
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

  useEffect(() => {
    fetch(`http://localhost:5000/api/homestays/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          ...data.data,
          amenities: data.data.amenities?.join(", ") || "",
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...formData,
      price: Number(formData.price),
      rating: Number(formData.rating),
      reviews: Number(formData.reviews),
      amenities: formData.amenities
        .split(",")
        .map((item) => item.trim()),
    };

    const response = await fetch(
      `http://localhost:5000/api/homestays/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );

    if (response.ok) {
      alert("✅ Homestay Updated Successfully");
      navigate("/dashboard");
    } else {
      alert("Failed to update homestay");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center py-12">

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-2xl"
      >

        <h1 className="text-3xl font-bold text-center mb-8">
          Edit Homestay
        </h1>

        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="rating"
          type="number"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="reviews"
          type="number"
          value={formData.reviews}
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
        />

        <textarea
          className="w-full border p-3 rounded-lg mb-6"
          rows="4"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          Update Homestay
        </button>

      </form>

    </div>
  );
}

export default EditHomestay;
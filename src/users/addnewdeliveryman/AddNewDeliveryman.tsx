import React, { useState } from "react";

function initialState() {
  return {
    firstName: "",
    lastName: "",
    email: "",
    deliverymanType: "",
    zone: "",
    vehicle: "",
    identityType: "",
    identityNumber: "",
    image: null,
    phone: "",
    password: "",
    confirmPassword: "",
    file: null,
  };
}

export default function Demo() {
  const [form, setForm] = useState(initialState());
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, image: file }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleReset = () => {
    setForm(initialState());
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare data for console
    const output = { ...form };
    if (form.image) output.image = form.image.name;
    if (form.file) output.file = form.file.name;
    console.log(output);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <div className="flex items-center mb-2">
        <span className="mr-2 text-lg">🧑‍💼</span>
        <span className="font-semibold text-base">Add New Deliveryman</span>
      </div>

      {/* General Information */}
      <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-4">
        <div className="text-xs font-semibold text-gray-700 mb-3 flex items-center">
          <span className="mr-1">⚙️</span> General Information
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">First name <span className="text-red-500">*</span></label>
              <input name="firstName" value={form.firstName} onChange={handleChange} type="text" className="border rounded px-3 py-2 text-xs" placeholder="First name" required />
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">Last name <span className="text-red-500">*</span></label>
              <input name="lastName" value={form.lastName} onChange={handleChange} type="text" className="border rounded px-3 py-2 text-xs" placeholder="Last name" required />
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">Email <span className="text-red-500">*</span></label>
              <input name="email" value={form.email} onChange={handleChange} type="email" className="border rounded px-3 py-2 text-xs" placeholder="Ex: ex@example.com" required />
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">Deliveryman type <span className="text-red-500">*</span></label>
              <select name="deliverymanType" value={form.deliverymanType} onChange={handleChange} className="border rounded px-3 py-2 text-xs" required>
                <option value="">Select deliveryman type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">Zone <span className="text-red-500">*</span></label>
              <select name="zone" value={form.zone} onChange={handleChange} className="border rounded px-3 py-2 text-xs" required>
                <option value="">Select zone</option>
                <option value="Zone 1">Zone 1</option>
                <option value="Zone 2">Zone 2</option>
              </select>
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">Vehicle <span className="text-red-500">*</span></label>
              <select name="vehicle" value={form.vehicle} onChange={handleChange} className="border rounded px-3 py-2 text-xs" required>
                <option value="">Select vehicle</option>
                <option value="Bike">Bike</option>
                <option value="Bicycle">Bicycle</option>
              </select>
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">Identity type</label>
              <select name="identityType" value={form.identityType} onChange={handleChange} className="border rounded px-3 py-2 text-xs">
                <option value="">Select identity type</option>
                <option value="NID">NID</option>
                <option value="Passport">Passport</option>
              </select>
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">Identity number</label>
              <input name="identityNumber" value={form.identityNumber} onChange={handleChange} type="text" className="border rounded px-3 py-2 text-xs" placeholder="Ex: DH-23434-LS" />
            </div>
            {/* Image Upload */}
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1 flex items-center">
                Identity image <InfoIcon />
              </label>
              <div className="flex flex-col items-center border border-dashed rounded p-4 bg-gray-50">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-16 h-16 object-cover rounded mb-2" />
                ) : (
                  <span className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded mb-2">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 16v-4M12 8h.01" /><circle cx="12" cy="12" r="10" /></svg>
                  </span>
                )}
                <input name="image" type="file" accept="image/*" className="text-xs" onChange={handleImageChange} />
              </div>
            </div>
            {/* File Upload */}
            <div className="flex flex-col col-span-3">
              <label className="text-xs font-semibold mb-1">Choose File</label>
              <input name="file" type="file" className="text-xs" onChange={handleChange} />
            </div>
          </div>

          {/* Login Information */}
          <div className="mt-6">
            <div className="text-xs font-semibold text-gray-700 mb-3 flex items-center">
              <span className="mr-1">🔒</span> Login Information
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-semibold mb-1">Phone <span className="text-red-500">*</span></label>
                <div className="flex items-center">
                  <span className="mr-2 text-xs">🇮🇳 +91</span>
                  <input name="phone" value={form.phone} onChange={handleChange} type="tel" className="border rounded px-3 py-2 text-xs w-full" required />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold mb-1">Password <span className="text-red-500">*</span></label>
                <input name="password" value={form.password} onChange={handleChange} type="password" className="border rounded px-3 py-2 text-xs" required minLength={8} placeholder="8+ characters required" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold mb-1">Confirm password <span className="text-red-500">*</span></label>
                <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" className="border rounded px-3 py-2 text-xs" required minLength={8} placeholder="8+ characters required" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button type="button" onClick={handleReset} className="bg-gray-100 text-gray-700 px-6 py-2 rounded text-xs font-semibold border border-gray-200 hover:bg-gray-200">
              Reset
            </button>
            <button type="submit" className="bg-teal-600 text-white px-6 py-2 rounded text-xs font-semibold shadow hover:bg-teal-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg className="ml-1 text-gray-400" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{display:'inline'}}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

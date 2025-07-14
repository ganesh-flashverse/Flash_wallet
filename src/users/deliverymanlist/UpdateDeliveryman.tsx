import React, { useState } from "react";

function initialState() {
  return {
    firstName: "William",
    lastName: "Damian",
    email: "Damian@gmail.com",
    deliverymanType: "Freelancer",
    zone: "Main Demo Zone",
    vehicle: "",
    identityType: "Passport",
    identityNumber: "674181515",
    avatar: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
    identityImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_States_passport_2010.svg/1200px-United_States_passport_2010.svg.png",
    updateIdentityImg: null,
    phone: "+8801900000000",
    password: "",
    confirmPassword: "",
    file: null,
  };
}

export default function Demo() {
  const [form, setForm] = useState(initialState());
  const [avatarPreview] = useState(form.avatar);
  const [identityImgPreview] = useState(form.identityImg);
  const [updateIdentityImgPreview, setUpdateIdentityImgPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "updateIdentityImg") {
        const file = files[0];
        setForm((prev) => ({ ...prev, updateIdentityImg: file }));
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => setUpdateIdentityImgPreview(reader.result);
          reader.readAsDataURL(file);
        } else {
          setUpdateIdentityImgPreview(null);
        }
      } else {
        setForm((prev) => ({ ...prev, [name]: files[0] }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setForm(initialState());
    setUpdateIdentityImgPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const output = { ...form };
    if (form.updateIdentityImg) output.updateIdentityImg = form.updateIdentityImg.name;
    if (form.file) output.file = form.file.name;
    console.log(output);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="flex items-center mb-2">
        <span className="mr-2 text-lg">✏️</span>
        <span className="font-semibold text-base">Update Deliveryman</span>
      </div>

      <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-4">
        <div className="text-xs font-semibold text-gray-700 mb-3 flex items-center">
          <span className="mr-1">⚙️</span> General Information
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                className="border rounded px-3 py-2 text-xs"
                required
              />
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                className="border rounded px-3 py-2 text-xs"
                required
              />
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="border rounded px-3 py-2 text-xs"
                required
              />
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">
                Deliveryman type <span className="text-red-500">*</span>
              </label>
              <input
                name="deliverymanType"
                value={form.deliverymanType}
                onChange={handleChange}
                type="text"
                className="border rounded px-3 py-2 text-xs"
                required
              />
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">
                Zone <span className="text-red-500">*</span>
              </label>
              <select
                name="zone"
                value={form.zone}
                onChange={handleChange}
                className="border rounded px-3 py-2 text-xs"
                required
              >
                <option value="Main Demo Zone">Main Demo Zone</option>
                <option value="Zone 2">Zone 2</option>
              </select>
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">
                Vehicle <span className="text-red-500">*</span>
              </label>
              <select
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                className="border rounded px-3 py-2 text-xs"
                required
              >
                <option value="">Select vehicle</option>
                <option value="Bike">Bike</option>
                <option value="Bicycle">Bicycle</option>
              </select>
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">
                Identity type <span className="text-red-500">*</span>
              </label>
              <select
                name="identityType"
                value={form.identityType}
                onChange={handleChange}
                className="border rounded px-3 py-2 text-xs"
                required
              >
                <option value="Passport">Passport</option>
                <option value="NID">NID</option>
              </select>
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-xs font-semibold mb-1">
                Identity number <span className="text-red-500">*</span>
              </label>
              <input
                name="identityNumber"
                value={form.identityNumber}
                onChange={handleChange}
                type="text"
                className="border rounded px-3 py-2 text-xs"
                required
              />
            </div>
            <div className="flex flex-col col-span-1 items-center">
              <label className="text-xs font-semibold mb-1">
                Deliveryman image <span className="text-red-500">*</span>
                <span className="text-xs text-red-400 ml-1">( Ratio 1:1 )</span>
              </label>
              <span className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border">
                <img
                  src={avatarPreview}
                  alt="avatar"
                  className="w-20 h-20 object-cover"
                />
              </span>
            </div>
            <div className="flex flex-col col-span-3">
              <label className="text-xs font-semibold mb-1">Choose File</label>
              <input
                name="file"
                type="file"
                className="text-xs"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col col-span-1 items-center">
              <label className="text-xs font-semibold mb-1">Identity images</label>
              <span className="w-16 h-20 flex items-center justify-center bg-gray-100 rounded overflow-hidden border">
                <img
                  src={identityImgPreview}
                  alt="identity"
                  className="w-12 h-16 object-cover"
                />
              </span>
            </div>
            <div className="flex flex-col col-span-3">
              <label className="text-xs font-semibold mb-1">
                Update identity image
              </label>
              <div className="flex items-center gap-4">
                <span className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded border border-dashed">
                  {updateIdentityImgPreview ? (
                    <img
                      src={updateIdentityImgPreview}
                      alt="Preview"
                      className="w-12 h-12 object-cover"
                    />
                  ) : (
                    <svg
                      width="32"
                      height="32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 16v-4M12 8h.01" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                </span>
                <input
                  name="updateIdentityImg"
                  type="file"
                  accept="image/*"
                  className="text-xs"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs font-semibold text-gray-700 mb-3 flex items-center">
              <span className="mr-1">🔒</span> Account Information
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-semibold mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                  <span className="mr-2 text-xs">🇧🇩 +880</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    className="border rounded px-3 py-2 text-xs w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold mb-1">Password</label>
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  className="border rounded px-3 py-2 text-xs"
                  minLength={8}
                  placeholder="8+ characters required"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold mb-1">
                  Confirm password
                </label>
                <input
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  className="border rounded px-3 py-2 text-xs"
                  minLength={8}
                  placeholder="8+ characters required"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-100 text-gray-700 px-6 py-2 rounded text-xs font-semibold border border-gray-200 hover:bg-gray-200"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded text-xs font-semibold shadow hover:bg-teal-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

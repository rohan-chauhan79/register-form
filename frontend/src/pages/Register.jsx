// "use client"
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     //
  //     const res = await axios.post("http://localhost:5000/register", formData);
  //     setMessage(res.data.message);
  //     setFormData({ firstName: "", lastName: "", password: "" });
  //   } catch (error) {
  //     setMessage("Error registering user");
  //   }
  // };
//
const response = await axios.post("http://localhost:5000/register", formData);
setMessage(response.data.message);
} catch (error) {
setMessage(error.response?.data?.message || "Registration failed");
}
};
//

  return (
   <>
   <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white p-6 rounded shadow-md w-80 flex flex-col items-center">
    <h2 className="text-2xl mb-4">Register</h2>
    {message && <p className="text-green-600">{message}</p>}

    <form onSubmit={handleSubmit} className="w-full">
      <input type="text" name="firstName" placeholder="First Name" className="w-full p-2 border mb-2" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" placeholder="Last Name" className="w-full p-2 border mb-2" onChange={handleChange} value={formData.lastName} />
      <input type="password" name="password" placeholder="Password" className="w-full p-2 border mb-2" onChange={handleChange} value={formData.password} />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
    </form>

    {/* Button moved inside the container */}
    <p className="mt-1 text-bold">OR</p>
    <button 
      className="w-full bg-green-500 text-white p-2 rounded mt-4" 
      onClick={() => window.location.href = "/users"}
    >
      Show Registered Users Details
    </button>
  </div>
</div>

      </>
  );
}

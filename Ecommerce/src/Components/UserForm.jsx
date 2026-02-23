import { useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }

    const userData = { name, email, phone };

    console.log("User Details:", userData);
    alert("Form Submitted ");

    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <div>
      <h3>User Details Form</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
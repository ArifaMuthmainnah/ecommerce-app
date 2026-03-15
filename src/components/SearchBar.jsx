import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Cari produk..."
      value={keyword}
      onChange={handleChange}
      style={{
        padding: "0.5rem",
        width: "100%",
        maxWidth: "400px",
        marginBottom: "1rem",
      }}
    />
  );
}
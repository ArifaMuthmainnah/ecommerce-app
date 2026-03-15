import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import Loading from "../components/Loading";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h2>{product.title}</h2>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "300px", objectFit: "contain" }}
      />

      <p style={{ marginTop: "1rem" }}>{product.description}</p>

      <h3 style={{ color: "#E67E22" }}>
        ${product.price.toFixed(2)}
      </h3>

      <button
        onClick={() => addItem(product)}
        style={{
          padding: "0.75rem 1.5rem",
          background: "#27AE60",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        + Tambah ke Keranjang
      </button>
    </div>
  );
}
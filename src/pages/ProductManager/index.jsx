import { useState, useEffect } from "react";
import ProductList from "../../Components/ProductList";
import Form from "../../Components/Form";

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    availableForSale: "sim",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      localStorage.removeItem("products");
    }
  }, [products]);

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = formData;
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      setProducts([...products, formData]);
    }

    setFormData({
      name: "",
      price: "",
      description: "",
      availableForSale: "sim",
    });
  };

  const handleEdit = (index) => {
    setFormData(products[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const sortedProducts = [...products].sort((a, b) => {
    return parseFloat(a.price) - parseFloat(b.price);
  });

  return (
    <div className="product-manager">
      <Form
        formData={formData}
        updateFormData={updateFormData}
        handleSubmit={handleSubmit}
        editingIndex={editingIndex}
      />
      <ProductList
        products={sortedProducts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

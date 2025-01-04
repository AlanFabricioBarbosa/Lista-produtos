import PropTypes from "prop-types";

export default function ProductList({ products, handleEdit, handleDelete }) {
  return (
    <div className="product-manager">
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">
                R$ {parseFloat(product.price).toFixed(2)}
              </p>
              <p className="product-description">{product.description}</p>
              <p
                className={`product-availability ${
                  product.availableForSale === "sim"
                    ? "available"
                    : "unavailable"
                }`}
              >
                {product.availableForSale === "sim"
                  ? "Disponível"
                  : "Indisponível"}
              </p>
            </div>
            <div className="product-actions">
              <button
                onClick={() => handleEdit(index)}
                className="action-btn edit-btn"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="action-btn delete-btn"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      description: PropTypes.string.isRequired,
      availableForSale: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

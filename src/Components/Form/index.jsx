import PropTypes from "prop-types";

export default function Form({
  formData,
  updateFormData,
  handleSubmit,
  editingIndex,
}) {
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="form-label">Nome do Produto</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Preço</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => updateFormData("price", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Descrição do Produto</label>
        <textarea
          value={formData.description}
          onChange={(e) => updateFormData("description", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Disponível para Venda</label>
        <select
          value={formData.availableForSale}
          onChange={(e) => updateFormData("availableForSale", e.target.value)}
          className="form-input"
        >
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>
      </div>
      <button type="submit" className="submit-btn">
        {editingIndex !== null ? "Salvar Alterações" : "Adicionar Produto"}
      </button>
    </form>
  );
}

Form.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    availableForSale: PropTypes.string.isRequired,
  }).isRequired,
  updateFormData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  editingIndex: PropTypes.number,
};

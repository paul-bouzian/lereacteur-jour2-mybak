import "./Operation.css";

const Operation = ({ operation, className }) => {
  const newAmount = operation.amount
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div className={`operation ${className}`}>
      <div className="date-description">
        <span>{operation.date}</span>
        <p>{operation.description}</p>
      </div>
      <span>{newAmount} €</span>
    </div>
  );
};

export default Operation;

import "./Account.css";
import Operation from "./Operation/Operation";

const Account = ({ account }) => {
  const newBalance = account.balance
    .toFixed(2) // Arrondit à 2 décimales
    .replace(".", ",") // Remplace le point par une virgule
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div className="account">
      <div className="bar" style={{ backgroundColor: account.color }}>
        <h1>{account.name}</h1>
        <p className="balance">{newBalance} €</p>
      </div>

      <div className="operations">
        {account.operations.map((operation, index) => {
          return (
            <Operation
              key={index}
              operation={operation}
              className={index % 2 === 0 ? "white-operation" : "grey-operation"}
            />
          );
        })}
      </div>

      <div className="see-more">
        <button>SEE MORE</button>
      </div>
    </div>
  );
};

export default Account;

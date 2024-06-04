import accounts from "../../assets/accounts.json";
import Account from "./Account/Account";
import "./Accounts.css";

const Accounts = () => {
  return (
    <main>
      {accounts.map((acc, index) => {
        return <Account key={index} account={acc} />;
      })}
    </main>
  );
};

export default Accounts;

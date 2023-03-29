import { useCurrency } from "./utils/customHooks/useCurrency";

function App() {
  const { data } = useCurrency();
  return (
    <div className="table-container">
      <h1 className="heading">Table Currency</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((cr, i) => (
            <tr key={i}>
              <td>{cr?.currency ?? "No Data"}</td>
              <td>{cr.webuy ?? "No Data"}</td>
              <td>{cr?.exchangerate ?? "No Data"}</td>
              <td>{cr?.weshell ?? "No Data"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

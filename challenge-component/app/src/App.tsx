import "./App.css";

interface WithTitleProps {
  items: string[];
}
function WithTitle({ items }: WithTitleProps) {
  return (
    <div>
      {items.length == 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <p>You have {items.length} items in your basket</p>
      )}
    </div>
  );
}

function App() {
  const items = ["Chocolate", "Strawberry", "Banana"];

  return (
    <>
      <div>
        <WithTitle items={items} />
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

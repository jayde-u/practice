
function ProductRow({ product }) {
  const colorStyle = {
    color: product.stocked ? 'black' : 'red';
  }

  return (
    <>
      <tr>
        <td style="{colorStyle}">{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

function ProductCategoryRow({ category }) {
  return(
    <>
    </>
  );
}

function ProductTable({ products }) {
  return(
    <>
    </>
  );
}

function SearchBar() {
  return(
    <>
    </>
  );
}

function FilterableProductTable({ products }) {
  return (
    <>
      <SearchBar />
      <ProductTable products={products}/>
    </>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS}/>;
}
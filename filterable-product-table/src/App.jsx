import { useState } from "react";

function ProductRow({ product }) {
  const colorStyle = {
    color: product.stocked ? 'black' : 'red'
  };

  return (
    <>
      <tr>
        <td style={colorStyle}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

function ProductCategoryRow({ category }) {
  return(
    <>
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    </>
  );
}

function ProductTable({ products, searchText, isStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (isStockOnly && !product.stocked) return;
    if (!product.name.toLowerCase().includes(searchText)) return;

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}/>
        );
    } 
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  );
}

function SearchBar({ searchText, isStockOnly }) {
  return(
    <>
      <form>
        <input type="text" placeholder="Search.." value={searchText}/>
        <br/>
        <label>
            <input type="checkbox" checked={isStockOnly}/>
             Only show products in stock
        </label>
      </form>
    </>
  );
}

function FilterableProductTable({ products }) {
  const [isStockOnly, setIsStockOnly] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <SearchBar 
        searchText={searchText} 
        isStockOnly={isStockOnly} />
      <ProductTable 
        products={products}
        searchText={searchText} 
        isStockOnly={isStockOnly} />
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
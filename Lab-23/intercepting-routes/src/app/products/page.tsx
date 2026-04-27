import Link from "next/link";

function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li><Link href="/products/1">Product 1</Link></li>
        <li><Link href="/products/2">Product 2</Link></li>
      </ul>
    </div>
  );
}

export default ProductsPage
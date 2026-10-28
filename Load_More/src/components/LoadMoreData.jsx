import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  console.log("Page", page);
  console.log("TotalProducts", totalProducts);
  console.log("End of products", totalProducts === products.length);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${page === 1 ? 0 : (page - 1) * 20}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch Products");
        }
        const data = await res.json();
        console.log(data);
        setTotalProducts(data.total);
        if (data && data.products && data.products.length) {
          setProducts((prevProducts) => {
            return [...prevProducts, ...data.products];
          });
        }
      } catch (error) {
        console.log("Failed to fetch more products", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      {loading && (
        <div className="loading-container">
          <p>
            <b>Loading...</b>
          </p>
        </div>
      )}
      <div className="products-container">
        {/* {!loading && products.length === 0 && (
          <p>
            <b>Products list is empty! Try again</b>
          </p>
        )} */}
        {/* itereate the products list  */}
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <p>
                <b>{product.title}</b>
              </p>
              <span>
                $<b>{product.price}</b>
              </span>
            </div>
          );
        })}
      </div>
      {!loading && products.length === totalProducts && (
        <p><b>You have reached End of Products</b></p>
      )}
      {products.length<totalProducts && (
        <div id="button-container">
          <button onClick={() => setPage(page + 1)} disabled={loading}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadMoreData;

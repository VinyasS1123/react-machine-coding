import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  //   console.log("data", data);
  console.log("Percentage", scrollProgress);

  function handleScrollPercentage() {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    const percentage = Number(((window.scrollY / maxScroll) * 100).toFixed(0));
    setScrollProgress(percentage);
  }

  useEffect(() => {
    async function fetchData(url) {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch Data", error);
        }
        const data = await res.json();
        if (data && data.products) {
          setData(data.products.map((prod) => prod.title));
        }
      } catch (error) {
        console.log("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <div>
      <header>
        <h1>Custom Scroll Indicator</h1>
      </header>
      {/* Add progress bar here  */}
      {!loading && data && (
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}
      {loading && (
        <div id="loading-indicator">
          <p>
            <b>Loading...</b>
          </p>
        </div>
      )}

      {!loading &&
        data &&
        data.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
    </div>
  );
};

export default ScrollIndicator;

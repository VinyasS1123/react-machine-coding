import { useEffect, useState } from "react";
import "./App.css";
// https://dummyjson.com/recipes/search?q=Margherita

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [errors, setErrors] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [showResults, setshowResults] = useState(false);
  const [cache, setCache] = useState({});

  // console.log("searchInput", searchInput);
  // console.log("Recipes", recipes);
  console.log("Cache", cache);

  function handleSearchChange(e) {
    const input = e.target.value;
    setSearchInput(input);
  }

  useEffect(() => {
    // console.log("Debounce effect ran");

    const fetchData = async () => {
      // if (searchInput === "") {
      //   setRecipes([])
      //   return
      // }
      if (cache[searchInput]) {
        console.log("Found");
        setRecipes(cache[searchInput]);
        return
      }
      try {
        // console.log("API Call", searchInput);
        const res = await fetch(
          ` https://dummyjson.com/recipes/search?q=${searchInput} `,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch Data");
        }
        const searchData = await res.json();
        if (searchData && searchData.recipes && searchData.recipes.length) {
          const results = searchData.recipes.map((item) => {
            return {
              id: item.id,
              name: item.name,
            };
          });
          setRecipes(results);
          if (searchInput !== "") {
            setCache((prev) => {
              return { ...prev, [searchInput]: results };
            });
          }
        }
        // console.log(searchData);
      } catch (error) {
        console.log(error);
        setErrors("Failed to fetch data");
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      // console.log("Debounce cleanup ran");
      clearTimeout(timer);
    };
  }, [searchInput]);

  return (
    <div className="App">
      <h1>Autocomplete Search bar</h1>
      <div>
        <input
          type="text"
          placeholder="Search here"
          className="search-input"
          value={searchInput}
          onChange={handleSearchChange}
          onFocus={() => setshowResults(true)}
          onBlur={() => setshowResults(false)}
        />

        {recipes.length > 0 && showResults && (
          <div className="results-container">
            {recipes.map((item) => (
              <span key={item.id} id="result">
                {item.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

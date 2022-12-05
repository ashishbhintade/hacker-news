import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("programming");
  const [text, setText] = useState("");
  const [largeTitle, setLargeTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchArticles = async () => {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      const data = await res.json();
      setItems(data.hits);
      setLargeTitle(data.hits[0]);
    };
    fetchArticles();
    setIsLoading(false);
  }, []);

  return (
    <>
      <section className="section">
        <form autoComplete="off">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search For Something"
          />
          <button>Search</button>
        </form>

        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <article className="title">
              <h1>{largeTitle.title}</h1>
              <a href="">Read Full Article</a>
            </article>

            <article className="cards">
              <div>
                <h2>Heading 2</h2>
                <ul>
                  <li>By Ashish</li>
                  <li>
                    <a href="">Read Full Article</a>
                  </li>
                </ul>
                <p>Date</p>
              </div>
            </article>
          </>
        )}
      </section>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("programming");
  const [text, setText] = useState("");
  const [largeTitle, setLargeTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

        <article className="title">
          <h1>Very big title here</h1>
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
      </section>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles")
      .then(res => res.json())
      .then(setArticles);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>BeyondChats Articles</h1>

      {articles.map(a => (
        <div key={a.id} style={{ marginBottom: 20 }}>
          <h2>
            {a.title}
            {a.is_updated && " ✅"}
          </h2>
          <p>{a.content.slice(0, 300)}...</p>
        </div>
      ))}
    </div>
  );
}

export default App;

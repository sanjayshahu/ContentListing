import React, { useEffect, useState } from "react";
import "./Content.css";

function Content({searchQuery}) {
  const [thumbnailUrls, setThumbnailUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  

  const fetchData = (page) => {
    setLoading(true);
    let url = `https://test.create.diagnal.com/data/page${page}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const dataContent = data["page"]["content-items"]["content"];
        if (dataContent) {
          setThumbnailUrls(prevUrls => [...prevUrls, ...dataContent]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 5 && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);



  const filteredThumbnails = thumbnailUrls.filter(entity =>
    entity.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading && thumbnailUrls.length === 0) {
    return <div>Loading...</div>;
  }

  return (<div>
  
    <div className="grid-container">
      {filteredThumbnails && filteredThumbnails.map((entity, index) => (
        <div key={index} className="thumbnail-container">
          <div
            className="thumbnail"
            style={{ backgroundImage: `url(https://test.create.diagnal.com/images/${entity["poster-image"]})` }}
          ></div>
          <div class="name">{entity.name}</div>
          
        </div>
        
      ))}
      {loading && <div>Loading more...</div>}
    </div>
    </div>
  );
}

export default Content;

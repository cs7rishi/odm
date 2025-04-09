import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  const handleDownload = async () => {
    const res = await fetch('http://localhost:8080/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    alert('Download started: ' + data.message);
  };

  return (
    <div>
      <h1>ODM - Open Download Manager</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default App;

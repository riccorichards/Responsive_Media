import { useState } from 'react';
import './App.css';
import { Media } from './photos';
function App() {
  const [file, setFile] = useState(null)
  return (
    <div className="containter">
      <h1>Responsive Media Gallery</h1>
      <div className="media-containter">
        {Media.map((item, index) => (
          <div key={index} className="media" onClick={() => setFile(item)}>
            {item.type === "video"
              ? <video src={`${item.url}#t=0.001`} alt="video" muted preload='metadata'/>
              : <img src={item.url} alt="somePhoto"/>
            }
          </div>
        ))}
      </div>
      <div className='fullScreen' style={{display: file ? "block" : "none"}}>
        <span onClick={() => setFile(null)}>&times;</span>
        {file?.type === "video"
          ? <video src={file?.url} muted autoPlay controls />
          : <img src={file?.url} alt='ricco'/>
        }
      </div>
    </div>
  );
}

export default App;

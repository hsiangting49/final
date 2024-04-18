//import logo from './logo.svg';
import './App.css';

const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
  width: '264',
  height: '378'
};

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];

function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + 'cover'}
        style={{
          width: book.width,
          hieght: book.height
        }}
      />
    </div>
  )
}

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'white':'orange'
      }}
      >
      {zine.title}
    </li>
    );
    return (
      <ul>{listZines}</ul>
    )
  }

function MagicButton() {
  return (
    <button> Magic Power</button>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bookshelf/>
        <ZineRack/>
        <MagicButton/>
      </header>
      
    </div>
  );
}

export default App;
/* <img src={logo} className="App-logo" alt="logo" />
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React With Me!
</a> */
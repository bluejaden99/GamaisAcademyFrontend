import logo from './logo.svg';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import PDFViewer from './components/PDFViewer';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoPlayer videoName="PAT_18_11_2020.mp4"/>
        <PDFViewer documentName="probstat-book.pdf"/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

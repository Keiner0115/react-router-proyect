import { Navbar } from "./components/Navbar";
import "./App.css";
import { ImageAtm } from "./components/atoms/imageAtm/ImageAtm";
import vite from "/public/vite.svg"
import { HeadingAtm } from "./components/atoms/headingAtm/HeadingAtm";

function App() {
  return (
    <>
      <Navbar />
      <HeadingAtm>
        ViteIcon
      </HeadingAtm>
      <ImageAtm url={vite} />
    </>
  );
}

export default App;

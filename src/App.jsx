import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Models from './components/Models';

const getModels = async () => {
  const response = await fetch("./models.json")
  return response.json()

}
const modelPromise = getModels()

function App() {
  

  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <Models modelPromise={modelPromise} />
    </>
  );
}

export default App

import MainContent from "./components/MainContent"

const App = () => {
  return (
    <div className="h-screen w-full relative">
      <img className="h-full w-full object-cover object-center brightness-75" src="mainBg.jpg" alt="mainBg" loading="lazy" />
      <MainContent />
    </div>
  )
}

export default App
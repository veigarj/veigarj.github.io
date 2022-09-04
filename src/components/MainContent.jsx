import '../styles/components/maincontent.sass'

//components
import AboutContainer from './AboutContainer';
import ProjetosContainer from './ProjetosContainer';
import TecnologisContainer from './TecnologisContainer';

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TecnologisContainer />
      <ProjetosContainer />

    </main>
  )
}

export default MainContent
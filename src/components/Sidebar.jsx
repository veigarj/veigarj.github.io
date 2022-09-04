//Img
import avatar from '../img/Gperfil.jpg'

//styile
import '../styles/components/Sidebar.sass'
import InformationContainer from './InformationContainer'

// Components
import SocialNetworks from './SocialNetworks'


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Glauco Veiga" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href='' className="btn">Download currículo</a>

    </aside>
  )
}

export default Sidebar
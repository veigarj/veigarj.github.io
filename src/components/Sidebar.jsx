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
      <p className="title">Desenvolvedor Front-end</p>
      <SocialNetworks />
      <InformationContainer />
      <a href='https://drive.google.com/file/d/1tlkYCuLwjd2oHcHck0VmPERV5amw19E4/view?usp=sharing' className="btn">Download currículo</a>

    </aside>
  )
}

export default Sidebar
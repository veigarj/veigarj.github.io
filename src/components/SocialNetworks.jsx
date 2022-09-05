import '../styles/components/SocialNetworks.sass'

import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const socialNetworks = [
  {name: 'linkedin', site: 'https://www.linkedin.com/in/glauco-veiga/', icon: <FaLinkedinIn/>},
  {name: 'github', site: 'https://github.com/veigarj',  icon: <FaGithub />},
  {name: 'instagram', site:'https://www.instagram.com/glauco_veiga/', icon: <FaInstagram />},
]

const SocialNetworks = () => {
  return <section id='social-networks'>
    {socialNetworks.map((network) => (
      <a href={network.site} className='social-btn' id={network.name} key={network.name}>
        {network.icon}
      </a>
    ))}

  </section>
}

export default SocialNetworks
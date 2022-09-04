import '../styles/components/TecnologisContainer.sass'

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact
} from 'react-icons/di'

const tecnologies = [
  {id: 'html', name: 'HTML5', icon: <DiHtml5 />},
  {id: 'css', name: 'CSS3', icon: <DiCss3 />},
  {id: 'js', name: 'JavaScript', icon: <DiJsBadge />},
  {id: 'node', name: 'Node.js', icon: <DiNodejsSmall />},
  {id: 'react', name: 'React', icon: <DiReact />}
];

const TecnologisContainer = () => {
  return (
    <section className='technologies-container'>
     <h2>Tecnologias</h2>
     <div className='technologies-grid'>
      {tecnologies.map((tech) => (
        <div className='technology-card' id={tech.id} key={tech.id}>
          {tech.icon}
          <div className='technology-info'>
            <h3>{tech.name}</h3>
            <p>
            Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica 
            </p>
          </div>
        </div>
      ))}
     </div>
      
    </section>
  )
}

export default TecnologisContainer
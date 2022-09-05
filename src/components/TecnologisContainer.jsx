import '../styles/components/TecnologisContainer.sass'

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact
} from 'react-icons/di'

const tecnologies = [
  {id: 'html', name: 'HTML5', desc: 'O HTML5 é a nova versão do HTML e um dos seus principais objetivos é facilitar a manipulação dos elementos ', icon: <DiHtml5 />},
  {id: 'css', name: 'CSS3', desc: 'Conhecimentos em Estilização e Responsividade para deixa o projeto mais interessante e adapitavel', icon: <DiCss3 />},
  {id: 'js', name: 'JavaScript', desc: 'JavaScript é uma das 3 linguagens que todos os desenvolvedores web devem dominar', icon: <DiJsBadge />},
  {id: 'node', name: 'Node.js', desc: 'Node.js é um ambiente de servidor que permite você execute JavaScript no servidor.', icon: <DiNodejsSmall />},
  {id: 'react', name: 'React', desc: 'React é uma biblioteca JavaScript para construir interfaces de usuário e aplicativos SPA', icon: <DiReact />},
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
            {tech.desc}
            </p>
          </div>
        </div>
      ))}
     </div>
      
    </section>
  )
}

export default TecnologisContainer
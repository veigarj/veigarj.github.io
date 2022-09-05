import '../styles/components/ProjetosContainer.sass'

const ProjetosContainer = () => {
  return (
    <section className='projetos-container'>
      <h2>Projetos</h2>
      <p>
      <ul className='project-cont'>
        <li><a href="https://github.com/veigarj/miniblog">Mini-Blog</a> </li>
        <li><a href="https://github.com/veigarj/To-do-ProjetoTs/tree/master/ProjetoTs">To-do-List</a></li>
        <li><a href="https://github.com/veigarj/SecretWord">SecretWord-Jogo</a> </li>
        <li><a href="https://github.com/veigarj/Instagram-Projeto-Bootcamp">Home-Instagam</a> </li>
        <li><a href="https://github.com/veigarj/Clone-Spotify">Home-Spotyfi</a> </li>
        <li><a href="https://github.com/veigarj/FlixClone">Netflix-Clone</a> </li>
        <li><a href="https://github.com/veigarj/Calculadora">Calculadora</a> </li>

      </ul>
      </p>
      <a href="https://github.com/veigarj?tab=repositories" className='btn'>Ver Projetos</a>
    </section>
  )
}

export default ProjetosContainer
import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='https://whatsa.me/5511996676792/?t=Ol%C3%A1!%20Estou%20interessado(a)%20nos%20servi%C3%A7os%20de%20decora%C3%A7%C3%A3o%20da%20Online%20Decora%C3%A7%C3%B5es.%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20e%20agendar%20uma%20consulta.%20Por%20favor,%20entre%20em%20contato%20comigo%20o%20mais%20breve%20poss%C3%ADvel.%20Obrigado!'
                  className='btn btn-custom btn-lg page-scroll'
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicite um orçamento
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

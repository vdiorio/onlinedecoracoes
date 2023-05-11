export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <img style={styles.img} src="img/portfolio/15.jpeg" className='img-responsive img-center' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Sobre nós</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  img: {
    "borderRadius": "10%",
    "border": "3px solid rgba(0, 0, 0, 0.5)",
  }
}

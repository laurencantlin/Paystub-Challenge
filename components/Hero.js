class Hero extends React.Component {

  render(props) {
    return (
      <section className="hero is-fullheight is-primary">
        <div className="hero-body has-text-centered is-centered">
          <div className="container">
            <h1 className="title">
              {this.props.title}
            </h1>
            <h2 className="subtitle">
              {this.props.subtitle}
            </h2>
            <br/> {this.props.children}

          </div>
        </div>
      </section>
    );
  }
}

export default Hero
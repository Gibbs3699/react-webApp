import React from 'react'
import Link from 'gatsby-link'
// import logo from '../images/logo-designcode.svg' //can used require as in line 8
import './Header.css'
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hasScrolled)
  }

  hasScrolled = (event) => {
    const scrollTap = window.pageYOffset

    if (scrollTap > 50) {
      this.setState({ hasScrolled: true})
    }else {
      this.setState({ hasScrolled: false})
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className='HeaderGroup'>
        <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30"/></Link>
        <Link to="/course">Course</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy"><button>Buy</button></Link>
      </div>
    </div>
    )
  }
}

export default Header

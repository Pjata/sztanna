import React from 'react'
import LangLayout from './LangLayout'
import '../assets/scss/main.scss'

import Footer from './Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children, ...rest } = this.props

    return (
      <LangLayout {...rest}>
        {langsMenu => {
          return (
            <>
              <div className={`body ${this.state.loading}`}>
                <div id="wrapper">
                  {children(langsMenu)}
                  <Footer />
                </div>
              </div>
            </>
          )
        }}
      </LangLayout>
    )
  }
}

export default Template

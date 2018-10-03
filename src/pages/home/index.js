import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './home.scss'
import pinyin from 'pinyin'

class Home extends Component {

  render () {
    return (
      <div className="home-page">
        here is home
        <h2 onClick={console.log(pinyin('测试, test'))}>hello write ci</h2>
      </div>
    )
  }
}

export default Home
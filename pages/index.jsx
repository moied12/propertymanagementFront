
import React, { Component } from 'react'
import Index from './home/index'
import { privateRoute } from './privateroute'

class IndexPage extends Component{
render(){
  return (
    <div>
    <Index/>
  </div>
  )
}
}

export default (privateRoute(IndexPage))

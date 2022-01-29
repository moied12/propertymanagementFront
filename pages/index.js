import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../store/count/countSlice'
import Index from './home/index'

const IndexPage = () => {
  return(
    <div>
      <Index/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counted: state.count.count
})

const mapDispatchToProps = { increment, decrement }

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
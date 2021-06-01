import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {
  ChannelWrapper

} from './style'
import { actionCreators } from './store'

class Channel extends PureComponent {

  componentDidMount() {
    let {getChannelList} = this.props
    getChannelList()
    window.scrollTo(0, 0)
  }
  render() {
    let {  } = this.props
    return (
      <ChannelWrapper>

        
      </ChannelWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channelList: state.getIn(['channel', 'channelList'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getChannelList() {
      dispatch(actionCreators.getChannelList())
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Channel))
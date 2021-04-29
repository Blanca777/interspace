import { connect } from 'react-redux'
import {
  FooterWrapper,
  FooterItem
} from './style'
function Footer() {
  return (
    <FooterWrapper>
      <FooterItem>
        <i className="iconfont">&#xe698;</i>react
      </FooterItem>
      <FooterItem>
        <i className="iconfont">&#xe9fd;</i>粤ICP备2021042464号-1
      </FooterItem>
      <FooterItem>
        <i className="iconfont">&#xe9fe;</i>blanca
      </FooterItem>
      <FooterItem>
        <i className="iconfont">&#xe650;</i>777
      </FooterItem>
    </FooterWrapper>
  )
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer)
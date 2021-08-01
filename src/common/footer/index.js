import { connect } from 'react-redux'
import {
  FooterWrapper,
  FooterItem
} from './style'
function Footer() {
  return (
    <FooterWrapper>
      <FooterItem>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-kuangjiaframe23"></use>
        </svg>react
      </FooterItem>
      <FooterItem>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-icon-class-c"></use>
        </svg>粤ICP备2021042464号-1
      </FooterItem>
      <FooterItem>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-gerenzhongxin"></use>
        </svg>blanca
      </FooterItem>
      <FooterItem>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-yanjing"></use>
        </svg>777
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
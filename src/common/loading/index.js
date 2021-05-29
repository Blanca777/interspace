import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  LoadingWrapper, LoadingText, LoadingBox
} from './style'
import capsule from '../../statics/iconpng/capsule.png'
import flyman from '../../statics/iconpng/flyman.png'
function Loading(props) {
  let { loadingText } = props
  return (
    <LoadingWrapper>
      <LoadingBox>
        <img className="flyman" src={flyman} alt="flyman" />
        <img className="capsule" src={capsule} alt="capsule" />
        <LoadingText>{loadingText}</LoadingText>
      </LoadingBox>
    </LoadingWrapper>
  )
}
const mapStateToProps = (state) => ({
  loadingText: state.getIn(['loading', 'loadingText'])
});

const mapDispatchToProps = (dispatch) => ({
  changeLoadingText(loadingText) {
    dispatch(actionCreators.changeLoadingTextAction(loadingText))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
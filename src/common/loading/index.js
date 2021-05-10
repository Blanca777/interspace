
import {
  LoadingWrapper,
} from './style'
import capsule from '../../statics/iconpng/capsule.png'
import flyman from '../../statics/iconpng/flyman.png'
function Footer() {
  return (
    <LoadingWrapper>
      <img className="flyman" src={flyman} alt="flyman" />
      <img className="capsule" src={capsule} alt="capsule" />
      
    </LoadingWrapper>
  )
}



export default Footer
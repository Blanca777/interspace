import React from 'react'
import { connect } from 'react-redux'
import {
  DetailWrapper,
  DetailBox,
  DetailTitle,
  TitleText,
  TitleMsg,
  TitleItem
  
} from './style'
const Detail = () => {
  return (
    <DetailWrapper>
      <DetailBox>
        <DetailTitle>
          <TitleText>每周123</TitleText>
          <TitleMsg>
            <TitleItem><i className="iconfont">&#xe60e;</i>blanca</TitleItem>
            <TitleItem><i className="iconfont">&#xe619;</i>20201-5-1</TitleItem>
            <TitleItem><i className="iconfont">&#xe650;</i>777</TitleItem>
          </TitleMsg>
        </DetailTitle>
      </DetailBox>
      
    </DetailWrapper>
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
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
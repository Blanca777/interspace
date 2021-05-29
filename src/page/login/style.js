import styled from 'styled-components'
export const LoginWrapper = styled.section`
  margin: 200px 0;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
export const ChangePanel = styled.aside`
  position: absolute;
  top: 130px;
  z-index: 0;
  width: 200px;
  padding: 20px 0;
  text-align: center;
  color: #53e3a6;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 60%);
`;
export const LoginBox = styled.div`
  width: 400px;
  height: 280px;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 60%);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;
export const LoginTitle = styled.div`
  width: 100%;
  height: 60px;
  font-size: 40px;
  font-weight: 200;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
`;
export const UsernameInput = styled.input.attrs({
  placeholder: "Username",
  pattern: "^[a-zA-Z0-9]{4,12}$",
  title: "请输入4-12位字母数字"
})`
  color: #53e3a6;
  font-size: 18px;
  font-weight: bold;
  width: 250px;
  height: 30px;
  text-align: center;
  background: rgba(255,255,255,.3);
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 10px 15px;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    background: #fff;
    width: 300px;
  }
  transition: all .5s;
`;
export const PasswordInput = styled.input.attrs({
  placeholder: "Password",
  type: "password",
  pattern: "^[a-zA-Z0-9]{6,16}$",
  title: "请输入6-16位字母数字"
})`
  color: #53e3a6;
  font-weight: bold;
  width: 250px;
  height: 30px;
  text-align: center;
  background: rgba(255,255,255,.3);
  border: none;
  outline: none;
  font-size: 18px;
  border-radius: 3px;
  padding: 10px 15px;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    background: #fff;
    width: 300px;
    marign: 10px 50px;
  }
  transition: all .5s;

`;
export const LoginBtn = styled.div`
  width: 250px;
  line-height: 30px;
  text-align: center;
  background: #fff;
  color: #53e3a6;
  font-size: 18px;
  border-radius: 3px;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #53e3a6;
    color: #fff;
  }
  transition: all .3s;
`;
export const SignupBox = styled.div`
  width: 400px;
  height: 380px;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 60%);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;
export const SignupBoxTitle = styled.div`
  width: 100%;
  height: 60px;
  font-size: 40px;
  font-weight: 200;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
`;
export const SUsernameInput = styled.input.attrs({
  placeholder: "Username",
  pattern: "^[a-zA-Z0-9]{4,12}$",
  title: "请输入4-12位字母数字"
})`
  color: #53e3a6;
  font-size: 18px;
  font-weight: bold;
  width: 250px;
  height: 30px;
  text-align: center;
  background: rgba(255,255,255,.3);
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 10px 15px;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    background: #fff;
    width: 300px;
  }
  transition: all .5s;
`;
export const SPasswordInput = styled.input.attrs({
  placeholder: "Password",
  type: "password",
  pattern: "^[a-zA-Z0-9]{6,16}$",
  title: "请输入6-16位字母数字"
})`
  color: #53e3a6;
  font-weight: bold;
  width: 250px;
  height: 30px;
  text-align: center;
  background: rgba(255,255,255,.3);
  border: none;
  outline: none;
  font-size: 18px;
  border-radius: 3px;
  padding: 10px 15px;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    background: #fff;
    width: 300px;
    marign: 10px 50px;
  }
  transition: all .5s;

`;
export const SAPasswordInput = styled.input.attrs({
  placeholder: "APassword",
  type: "password"
})`
  color: #53e3a6;
  font-weight: bold;
  width: 250px;
  height: 30px;
  text-align: center;
  background: rgba(255,255,255,.3);
  border: none;
  outline: none;
  font-size: 18px;
  border-radius: 3px;
  padding: 10px 15px;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    background: #fff;
    width: 300px;
    marign: 10px 50px;
  }
  transition: all .5s;
`;
export const SignupBtn = styled.div`
  width: 250px;
  line-height: 30px;
  text-align: center;
  background: #fff;
  color: #53e3a6;
  font-size: 18px;
  border-radius: 3px;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #53e3a6;
    color: #fff;
  }
  transition: all .3s;
`;

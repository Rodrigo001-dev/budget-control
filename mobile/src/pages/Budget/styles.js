import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 15px;
  justify-content: flex-start;

  background-color: #FFF;
`;

export const TitleInput = styled.Text`
  padding-top: 1px;
  color: #111;
  font-size: 18px;
`;

export const InputForm = styled.TextInput`
  background-color: #FFF;
  margin-bottom: 15px;
  width: 100%;
  color: #222;
  font-size: 18px;

  padding: 10px;

  border-radius: 7px;
  border-color: #17A2B8;
  border-width: 1px;
`;

export const BtnSubmitForm = styled.TouchableOpacity`
  background-color: #17A2B8;
  width: 100%;
  height: 45px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;

export const TxtSubmitForm = styled.Text`
  color: #FFF;
  font-size: 22px;
`;

export const TitleRequired = styled.Text`
  padding-top: 1px;
  padding-bottom: 5px;
  color: #111;
  font-size: 12px;
`;

export const LoadingArea = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
`;
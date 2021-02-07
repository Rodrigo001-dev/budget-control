import React, { useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import api from '../../api';

import { ScrollView } from 'react-native-gesture-handler';

import { 
  BtnSubmitForm, 
  Container, 
  InputForm, 
  LoadingArea, 
  TitleInput, 
  TitleRequired, 
  TxtSubmitForm 
} from './styles';

export default function Budget() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [msg, setMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const cadBudget = async () => {
    if (!validade()) return;

    setLoading(true);

    await api.post('/budget', { name, email, phone, whatsApp, msg })
      .then((response) => {
        Alert.alert("", response.data.message);
        setLoading(false);
      }).catch((error) => {
        if (error.response) {
          Alert.alert("", error.response.data.message);
          setLoading(false);
        } else {
          Alert.alert(
            "", 
            "Erro: Solicitação de orçamento não enviada com sucesso, tente mais tarde!"
          );
          setLoading(false);
        }
      });
  };

  const validade = () => {
    if (!name || !email || !phone || !whatsApp || !msg) {
      Alert.alert("", "Preencha o(s) campo(s) que está(ão) faltando");
      return false;
    }

    return true;
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <TitleInput>* Nome</TitleInput>
        <InputForm 
          placeholder="Nome completo"
          value={name}
          aditable={!loading}
          onChangeText={text => setName(text)}
        />

        <TitleInput>* E-mail</TitleInput>
        <InputForm 
          placeholder="Seu E-mail" 
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          aditable={!loading}
          onChangeText={text => setEmail(text)}
        />

        <TitleInput>* Telefone</TitleInput>
        <InputForm 
          placeholder="(XX) XXXXX-XXXX"
          value={phone}
          aditable={!loading}
          onChangeText={text => setPhone(text)}
        />

        <TitleInput>* WhatsApp</TitleInput>
        <InputForm 
          placeholder="(XX) XXXXX-XXXX"
          value={whatsApp}
          aditable={!loading}
          onChangeText={text => setWhatsApp(text)}
        />

        <TitleInput>* Conteúdo</TitleInput>
        <InputForm 
          placeholder="Fale um pouco do seu projeto"
          value={msg}
          aditable={!loading}
          onChangeText={text => setMsg(text)}
        />

        <TitleRequired>* Campo Obrigatório</TitleRequired>

        <BtnSubmitForm disabled={loading} onPress={cadBudget}>
          <TxtSubmitForm>
            Enviar
          </TxtSubmitForm>
        </BtnSubmitForm>

        {loading && 
          <LoadingArea>
            <ActivityIndicator size="large" color="#FFF" />
          </LoadingArea>
        }
      </Container>
    </ScrollView>
  );
};

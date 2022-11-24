import '@chakra-ui/react';
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from '@chakra-ui/react';
import React, { useState } from "react";

function Form() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    ed: '',
    city: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  //Receber os dados do formulário
  const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar os dados para o back-end
  const addUser = async e => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'success',
        mensagem: "Usuário cadastrado com sucesso!"
      });
      setUser({
        name: '',
        email: '',
        ed: '',
        city: ''
      });
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
      });
    }
  }

  function validate() {
    if (!user.name) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!' });
    if (!user.email) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!' });
    if (!user.ed) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo Endereço!' });
    if (!user.city) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo Cidade!' });

    return true;
  }

  return (
    <>
      <Box h="180vh">
        <Flex
          align="center"
          justify="center"
          bg="blackAlpha.100"
          h="calc(180vh - 150px)">
          <Center
            w="100%"
            maxW={840}
            bg="white"

            position="absolute"
            borderRadius={5}
            p="6"
            boxShadow="0 1px 2px #ccc">

            {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
            {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

            <FormControl display="flex" flexDir="column" gap="4" onSubmit={addUser}>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nome">Nome*</FormLabel>
                  <Input type="text" name="name" placeholder="Informe seu Nome Completo" onChange={valueInput} value={user.name} />

                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="email">E-mail*</FormLabel>
                  <Input type="email" name="email" placeholder="exemplo@exemplo.com.br" onChange={valueInput} value={user.email} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                  <Input type="date" name='date' />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                  <Input id="natural" type="natural" name="natural" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="cel">Celular</FormLabel>
                  <Input type="number" name="telephone" placeholder="(xx) xxxx-xxxx" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="Tefone">Telefone</FormLabel>
                  <Input type="number" name='telefone' placeholder="(xx) xxxx-xxxx" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="endereco">Endereço*</FormLabel>
                  <Input type="text" name='endereco' placeholder="Ex: Av. Treze de Maio, 2081 - Benfica" onChange={valueInput} value={user.ed} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="cidade">Cidade*</FormLabel>
                  <Input type="text" name='cidade' placeholder="Ex: Fortaleza - CE" onChange={valueInput} value={user.city}/>
                </Box>
              </HStack>
              <HStack spacing="4">

                <Box w="100%">
                  <FormLabel>É a primeira vez que você adota um Pet?</FormLabel>
                  <RadioGroup>
                    <HStack spacing="24px" id='q1' name='q1' >
                      <Radio value="sim">Sim</Radio>
                      <Radio value="não">Não</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%" >
                  <FormLabel>Você possui experiência com cuidado de animais?</FormLabel>
                  <RadioGroup>
                    <HStack spacing="24px" id='q2' name='q2'>
                      <Radio value="Sim">Sim</Radio>
                      <Radio value="Não">Não</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%" >
                  <FormLabel>Você mora em:</FormLabel>
                  <RadioGroup>
                    <HStack spacing="24px" id='q3' name='q3'>
                      <Radio value="casa">Casa</Radio>
                      <Radio value="apartamento">Apartamento</Radio>
                      <Radio value="outro">Outro</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%" >
                  <FormLabel>Você mora sozinho(a)?</FormLabel>
                  <RadioGroup>
                    <HStack spacing="24px" id='q4' name='q4' >
                      <Radio value="Sim">Sim</Radio>
                      <Radio value="Não">Não</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%" >
                  <FormLabel>Está ciente sobre a responsabilidade ao realizar a adoção?</FormLabel>
                  <RadioGroup>
                    <HStack spacing="24px" id='q5' name='q5' >
                      <Radio value="Sim">Sim</Radio>
                      <Radio value="Não">Não</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>
              <HStack justify="center">
                <Button
                onClick={validate}
                  w={240}
                  p="6"
                  type="submit"
                  bg="teal.600"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "teal.800" }}
                >
                  Enviar
                </Button>
              </HStack>
            </FormControl>
          </Center>
        </Flex>
      </Box>
    </>
  );
}

export default Form;
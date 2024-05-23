// import React, { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../ContextProvider/AuthContextProvidr'

// export default function Signup() {
//   const { Login, Logout } = useContext(AuthContext)


//   const [Loginemail, setLoginEmail] = useState("")
//   const [Loginpassword, setLoginPassword] = useState("")

//   const navigate = useNavigate();


//   const handleLogin = (e) => {
//     e.preventDefault()
//     // console.log(Loginemail, password)

//     fetch("https://reqres.in/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         email: Loginemail,
//         password: Loginpassword
//       })
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         Login(data.token)

//         if (data.token) {
//           navigate("/")
//         }
//       })

//     // let userLoginEmail = localStorage.getItem("email")
//     // let userLoginPassword = localStorage.getItem("password")

//     // if (Loginemail === userLoginEmail && Loginpassword === userLoginPassword) {
//     //   alert("khusiya manao login ho gaye")
//     //   navigate("/")

//     // } else {
//     //   alert("kuch to gadbad hai")
//     // }



//   }

//   // console.log(Login, token)


//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin} >
//         <input value={Loginemail} onChange={(e) => setLoginEmail(e.target.value)} placeholder='Enter Email' type="text" /> <br /><br />

//         <input value={Loginpassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder='Enter Password' type="text" /><br /><br />

//         <button type='submit' >Login</button>
//       </form>
//     </div>
//   )
// }




import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SimpleCard() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Loign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>

              <Input type="email" />

            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>


              <Input type="password" />


            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>

              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login
              </Button>


            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
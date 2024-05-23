// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// export default function Signup() {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const navigate = useNavigate()


//     const handleSignup = (e) => {
//         e.preventDefault()
//         console.log(email, password)

//         fetch("https://reqres.in/api/", {
//             method: "POST"
//         })
//             .then((res) => res.json())
//             .then((data) => console.log(data))


//         setEmail("")
//         setPassword("")

//         navigate("/login")
//     }


//     return (
//         <div>
//             <h1>Signup</h1>
//             <form onSubmit={handleSignup} >
//                 <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' type="text" /> <br /><br />

//                 <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' type="text" /><br /><br />

//                 <button type='submit' >Signup</button>
//             </form>
//         </div>


//     )
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
  
  export default function Signup() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
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
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
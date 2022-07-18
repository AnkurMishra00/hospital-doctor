import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
  } from '@chakra-ui/react'
const Details = () => {
  return (
    <div>
       
       <TableContainer>
  <Table variant='simple'>
    <TableCaption>All Hospital and Doctor</TableCaption>
    <Thead>
      <Tr>
        <Th>id</Th>
        <Th>Name</Th>
        <Th>Hospital</Th>
        <Th>Specialisation</Th>
        <Th isNumeric>Salary (click to sort asc / desc) △ ▽</Th>
        <Th>Details</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>John</Td>
        <Td>Sakra</Td>
        <Td>Nephrology</Td>
        <Td isNumeric>2400000</Td>
        <Td> <Button style={{backgroundColor:'white'}}>View More <br/> Details</Button> </Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>Aditya</Td>
        <Td>Manipal</Td>
        <Td>General</Td>
        <Td isNumeric>2000000</Td>
       <Td> <Button style={{backgroundColor:'white'}}>View More <br/> Details</Button> </Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td>Kanav</Td>
        <Td>Manipal</Td>
        <Td>General</Td>
        <Td isNumeric>	3000000</Td>
        <Td> <Button style={{backgroundColor:'white'}}>View More <br/> Details</Button> </Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        {/* <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th> */}
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default Details
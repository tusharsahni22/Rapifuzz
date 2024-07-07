import React from 'react'
import styled from 'styled-components'
import { BsArrowLeft } from "react-icons/bs";

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 448px;
  background-color: #fff;
  overflow-y: scroll;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  backdrop-filter: blur(5px);
  @media (max-width:767px){
    width:100%;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  z-index: 100;
`;
const Head = styled.div`
display : flex;
height: 50px;
background-color: #dfa4a4;
justify-content: space-between;
color: white;
align-items: center;
padding: 0 15px;
`;
const LeftArrow = styled(BsArrowLeft)`
cursor: pointer;
`;
const Text = styled.div`
`;
const Count = styled.div`
`;



function Cart({setCart}) {
  return (
    <Overlay onClick={()=>{setCart(false)}}>
        <Sidebar>
        <Head><LeftArrow onClick={()=>{setCart(false)}}/>
        <Text>Keep Shoping </Text>
        <Count>{0} Item(s)</Count>
        </Head>
        </Sidebar>
    </Overlay>
  )
}

export default Cart
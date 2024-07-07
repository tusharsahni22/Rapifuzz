import React, { useEffect ,useState} from 'react'
import styled from 'styled-components'
import { getProducts } from '../../Services/productServices';


function ProductDisplay() {

    const [products, setProducts] = React.useState([]);
    const [quantities, setQuantities] = useState({});

      useEffect(() => {
        getProducts().then((response) => {
            if (response.status === 200) {
                setProducts(response.data);
            }
        }).catch((error) => {
            console.log(error);
        });
    },[]);

    const updateQuantity = (productId, newQuantity) => {
        setQuantities(prevQuantities => ({
          ...prevQuantities,
          [productId]: Math.max(newQuantity, 0)
        }));
      };

const Wrapper = styled.div`
    padding: 40px 10%;
`;

const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const Card = styled.div`
  background-color: white;
  overflow: hidden;
  padding: 10px 10px;
  border-radius: 15px;
  box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
`;
const BuyNowButton = styled.button`
    background-color: #f0c040;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
    &:hover {
        background-color: #f0a040;
    }
`;

const Quantity = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    button {
        padding: 5px 10px;
        border: none;
        background-color: #f0c040;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
            background-color: #f0a040;
        }
    }
    span {
        font-size: 20px;
    }
`;



  return (
    <Wrapper>
        <h1>{"Products for Men and Women"}</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
            {products.map(product => (
                <Card key={product.id}> {/* Ensure product has a unique id */}
                <Img src={product.image} alt={product.name} />
                <div style={{ padding: "10px",height:"100px"}}>
                    <h3>{product.name}</h3>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    
                </div>
                <Quantity>
            <button onClick={() => updateQuantity(product.id, (quantities[product.id] || 0) - 1)}>-</button>
            <span>{quantities[product.id] || 0}</span>
            <button onClick={() => updateQuantity(product.id, (quantities[product.id] || 0) + 1)}>+</button>
          </Quantity>
                <BuyNowButton onClick={() => {}}>Buy Now</BuyNowButton>
            </Card>
            ))}
        </div>

    </Wrapper>
  )
}

export default ProductDisplay
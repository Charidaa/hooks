import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [totalPrice, srtTotalPrice] = useState(0);
  const [tatalIems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(300);
  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตระกร้า {tatalIems}</h3>
        <h3>ราคารวมสินค้าในตระกร้าทั้งหมด {totalPrice} บาท</h3>
      </div>
      <div>
        <img src="ipad.jpg" alt="ipad" width="15%" />
        <br />
        เคสไอเเพด ราคา {product1} บาท
      </div>
      <button>
      onClick={()=>{
        {setTotalItems(totatlItem + 1);
        setTolPrice(totalPrice + product1)};
      }
    }
      เพิ่มเข้าตระกร้า
      </button>
      <button>
        onClick={()=>{
            {setTotalItems(totatlItem + 1);
              setTolPrice(totalPrice + product1)};
        }
       
      
    
        
      </button>
      <button>นำออกจากตระกร้า</button>
      <div>
        <div>
          <img src="pencil.jpg" alt="pencil" width="15%" />
          <br />
          ปากกาไอเเพด ราคา {product1} บาท
        </div>
        <button>เพิ่มเข้าตระกร้า</button>
        <button>นำออกจากตระกร้า</button>
        <div>
          <img src="airpods.jpg" alt="airpods" width="15%" />
          <br />
          เเอร์พอต ราคา {product1} บาท
        </div>
        <button>เพิ่มเข้าตระกร้า</button>
        <button>นำออกจากตระกร้า</button>
      </div>
    </div>
  );
}

export default App;

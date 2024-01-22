import './App.css';
import Navbar from './Component/navbar/navbar';
import Banner from './Component/banner/banner';
import NewArrivals from './Component/new-arrivals/new-arrivals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MenItemsData from './Component/items/MenItemsData';
import WoItemData from './Component/items/WomenItem';
import KidItem from './Component/items/KidItemData';
import Login from './Component/login/login';
import Footer from './Component/footer/footer';
import Product from './Component/product/product';
import Signup from './Component/signup/signup';
// import Items from './Component/items/items';

function App(props) {
  // const {id}=props;
  // const {productId}= useParams();
  return (
    <div className="App">
      
      <Router>
      <Navbar />
      
       <Routes>
           <Route path="/" element={<Banner choice={"/"} />} />
          <Route path="/men" element={<Banner choice={"/men"}/>} />

          <Route path="/women" element={<Banner choice={"/women"}/>} />

          <Route path="/kid" element={<Banner choice={"/kid"}/>} />

          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />

        </Routes>
        <Routes>

        <Route path="/product"   key="1" element={<Product />}>  
        <Route path=':productId'  key="1" element={<Product />}/>  
        </Route>

        </Routes>
        <Routes>
        <Route path="/" element={<NewArrivals  key="shop1" title={"New Arrivals!"} CategoryItem={MenItemsData[0]}/>}/>
        <Route path="/men" element={<NewArrivals  key="men1" title={"New Arrivals!"} CategoryItem={MenItemsData[0]}/>}/>
        <Route path="/women" element={<NewArrivals key="women1" title={"New Arrivals!"} CategoryItem={WoItemData[0]}/>}/>
        <Route path="/kid" element={<NewArrivals key="kid1" title={"New Arrivals!"} CategoryItem={KidItem[0]}/>}/>
        </Routes>
        <Routes>
        <Route path="/" element={<NewArrivals  key="shop1" title={"Top-Searches!"} CategoryItem={MenItemsData[1]}/>}/>
        <Route path="/men" element={<NewArrivals  key="men1" title={"Top-Searches!"} CategoryItem={MenItemsData[1]}/>}/>
        <Route path="/women" element={<NewArrivals key="women1" title={"Top-Searches!"} CategoryItem={WoItemData[1]}/>}/>
        <Route path="/kid" element={<NewArrivals key="kid1" title={"Top-Searches!"} CategoryItem={KidItem[1]}/>}/>
        </Routes>
        <Footer/>
        </Router>
        
    </div>
  );
}

export default App;

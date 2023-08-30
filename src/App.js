// import Card from './component/Card';
import './App.css';
import ReactBS from './component/ReactBS';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//we need line above for regular bootstrap
import data from './component/Data.js';

const App = () => {
  return (
    <div  className='d-flex flex-wrap w-75'>
      {data.map((val)=>(
        <ReactBS 
          name={val.name} 
          type = {val.type} 
          age={val.age} 
          image = {val.image}
        />
      ))}
    </div>
  );
};

export default App;

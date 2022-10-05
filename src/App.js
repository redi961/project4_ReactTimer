import logo from './logo.svg';
import './App.css';
import MyTick from './mycom/MyTick';


// 컴포넌트는 반드시 리턴값이 있어야함 
// 리턴값은 반드시 한개의 태그 * 단 자식태그는 제외함
function App() {
    console.log("App");
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
          <MyTick/>
        </div>
    );

}

export default App;

import './my.css';
import MyTime from './MyTime';

//리턴값 내에서 여러개의 태그를 묶을때는 Fragment 혹은 <> </> 이용

function MyTick() {
  return (
    <>
    <h2>현재 날짜 : {new Date().toLocaleDateString()}</h2>
    <h2 className='Myh2'> <div> 현재시간 : <MyTime/> </div></h2>
    </>
  );
}

export default MyTick;
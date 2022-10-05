import './my.css'

function MyTime() {
    return (
      <>
        <div>
            <h2 className="clockText">{new Date().toLocaleTimeString()}</h2>
        </div>
        </>
    );
}
export default MyTime;
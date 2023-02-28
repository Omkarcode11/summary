import "./App.css";
import { data } from "./assets/data";

function Card({ data }) {
  let grading = data.backgroundColor;
  let rang = data.color;
  console.log(grading, rang);
  return (
    <div
      style={{ backgroundColor: `${grading}` }}
      className='card-layout'>
      <div className='icon-category'>
        <div>{data.icon}</div>
        <div style={{ color: `${rang}` }}>{data.category}</div>
      </div>
      <div>
        <span className='in-mark'>{data.score}</span> <span className='outoff'> / 100</span>
      </div>
    </div>
  );
}

function App() {
  console.log(data);

  return (
    <div className='App'>
      <div className='left-section'>
        <div className='you-result' >Your Result</div >
        <div className='score'>
          <div className='result'>76</div>
          <div className='total-mark'>of 100</div>
        </div>

        <div className='grade'>Great</div>
        <div className='text-area'>
          You score higher than 65% of the people who have taken these tests
        </div>
      </div>
      <div className='right-section'>
        <div className='category'>
        <h3 className='summary'> Summary</h3>
          {data.map((item, i) => (
            <Card
              data={item}
              key={i}
            />
          ))}
        </div>
        <div className='button'>
          <button className='continue-button'>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;

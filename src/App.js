import './App.css';
import SampleCard from './SampleCard';

//functional component
function App() {
  const list = [
    {
      firstName:'Zeeshaaan',
      lastName: 'Ahmed',
      misc: 'Student of Computer Science  '


    }
  ]
  const username = 'someone';
  return (
    <div className="App">
      <header className="App-header">
        {/* {
          list.map((listItem)=>{
            return(
              <>
                <h1>{listItem.firstName}</h1>
                <h1>{listItem.lastName}</h1>
                <h1>{listItem.misc}</h1>
                
              </>
            )
          })
        } */}
        <SampleCard firstName="Zeeshan" lastName="Ahmed" />
      </header>
    </div>
  );
}

export default App;

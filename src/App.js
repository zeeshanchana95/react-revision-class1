import './App.css';

//functional component
function App() {
  const list = [
    {
      firstName:'Zeeshan',
      lastName: 'Ahmed',
      misc: 'Student of CS'

    }
  ]
  const username = 'someone';
  return (
    <div className="App">
      <header className="App-header">
        {
          list.map((listItem)=>{
            return(
              <>
                <h1>{listItem.firstName}</h1>
                <h1>{listItem.lastName}</h1>
                <h1>{listItem.misc}</h1>
                
              </>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;

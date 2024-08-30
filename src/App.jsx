import Button from './Button';

function App() {
  const firstName = 'abc';

  const styles = { color: 'red', backgroundColor: 'blue' };

  return (
    <div>
      <Button text="Click" />
      <Button text="Submit" />
      <Button text="apply" />
      <Button text="contact" />
      <h1 style={styles}>React</h1>
      <input maxLength={5} />
    </div>
  );
}

export default App;

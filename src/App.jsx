import './App.css';
import Click from './Click';


export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Click handleClick={handleButtonClick}/>
      <Click text='Google url ' handleClick={() => handleButtonClick('https://www.google.com/')} />
    </div>
  );
}  


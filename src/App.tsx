import { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Toast from './components/Toast/Toast';

function App() {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => setToastVisible(true);
  const hideToast = () => setToastVisible(false);

  return (
    <div className="wrap">
      <Input inputType="text" placeholder="Email" />
      <button className="btn" onClick={showToast}>
        Show Toast
      </button>

      {toastVisible && (
        <Toast message="Hello! This is a toast." onClose={hideToast} />
      )}
    </div>
  );
}

export default App;

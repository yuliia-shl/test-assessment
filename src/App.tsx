import { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Toast from './components/Toast/Toast';
import SidebarMenu from './components/Sidebar/SidebarMenu';
import { sidebarItems } from './components/Sidebar/data';

function App() {
  const [toastVisible, setToastVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

      <button className="btn" onClick={() => setSidebarOpen(true)}>
        Open Sidebar
      </button>
      <SidebarMenu
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        items={sidebarItems}
      />
    </div>
  );
}

export default App;

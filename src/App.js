import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import mockApi from './apis/mockapi';
import './App.css';
import ContentLayout from './components/ContentLayout/ContentLayout';
import Login from './components/Login/Login';
import NotFound from './components/Pages/NotFound';

function App() {
  const username = useSelector(state=>state.auth.username)
  const theme = useSelector(state=>state.common.theme)
  mockApi.getTodos();

  return (
    <div className='App' id={theme}>
      <Routes>
        <Route path="/" element={username ? <ContentLayout /> : <Navigate to="/Login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

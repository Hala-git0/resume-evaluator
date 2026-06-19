import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EvaluatorPage from './pages/EvaluatorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      {/* الهيدر ثابت في أعلى كل الصفحات */}
      <Header /> 
      
      {/* هنا تتغير الصفحات بناءً على الرابط في المتصفح */}
      <Routes>
        <Route path="/" element={<EvaluatorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* مسار Catch-all لأي رابط غير معروف */}
        <Route path="*" element={
          <div style={{ textAlign: 'center', padding: '50px', color: '#000' }}>
            <h2>404 - الصفحة غير موجودة</h2>
            <p>المعذرة، الرابط الذي تحاول الوصول إليه غير صحيح.</p>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;

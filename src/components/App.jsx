import HomePage from 'page/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
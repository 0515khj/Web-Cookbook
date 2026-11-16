import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import MainPageIndex from './pages/MainPage/MainPageIndex';
import CssPageIndex from './pages/CssPage/CssPageIndex';
import JsPageIndex from './pages/JsPage/JsPageIndex';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<MainPageIndex/>}/>
          <Route path='/css/:groupId?/:featureId?' element={<CssPageIndex/>}/>
          <Route path='/js/:groupId?/:featureId?' element={<JsPageIndex/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
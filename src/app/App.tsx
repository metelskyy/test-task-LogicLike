import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { router } from '../shared/constants/routing';
import { ROUTES } from '../shared/constants/routes';
import { MainLayout } from '../shared/components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.COURSES} element={<MainLayout />}>
          {router.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

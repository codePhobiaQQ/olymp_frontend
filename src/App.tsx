import { Route, Routes } from 'react-router-dom';
import { RouteAttributes, routes } from './core/routes';
import { ConfigProvider } from 'antd';
import './styles/index.css';

const renderRoutes = (route: RouteAttributes) => {
  return <Route key={route.path} path={route.path} element={route.element} />;
};

function App() {
  return (<ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed'
      }
    }}>
    <Routes>{Object.values(routes).map(route => renderRoutes(route))}</Routes>
  </ConfigProvider>);
}

export default App;

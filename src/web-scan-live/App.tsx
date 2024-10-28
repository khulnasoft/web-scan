import { Routes, Route, Outlet } from 'react-router-dom';

import Home from 'web-scan-live/views/Home.tsx';
import Results from 'web-scan-live/views/Results.tsx';
import About from 'web-scan-live/views/About.tsx';
import NotFound from 'web-scan-live/views/NotFound.tsx';

import ErrorBoundary from 'web-scan-live/components/boundaries/PageError.tsx';
import GlobalStyles from './styles/globals.tsx';

const Layout = () => {
  return (
  <>
    <GlobalStyles />
    <Outlet />
  </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/check" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path=":urlToScan" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

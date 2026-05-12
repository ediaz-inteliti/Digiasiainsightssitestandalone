import '../styles/all.css';

import SiteTemplate from './SiteTemplate';
import Home from './pages/Home';

export default function App() {
  return (
    <SiteTemplate>
      <Home />
    </SiteTemplate>
  );
}
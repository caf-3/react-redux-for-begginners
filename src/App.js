import { Provider } from 'react-redux';
import store from './store/index'
import Sidebar from './components/Sidebar'
import Video from './components/Video'

function App() {
  return (
    <Provider store={store}>
      <Video />
      <Sidebar />
    </Provider>
  );
}

export default App;

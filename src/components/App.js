import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Home,CreatePost,PostDetail,Navbar} from './index'
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        
        <Route exact path='/' Component={Home}/>
        <Route exact path='/post/:postId' Component={PostDetail}/>
        <Route exact path='/create-post' Component={CreatePost}/>
        
      </Routes>
    </div>
  );
}

export default App;

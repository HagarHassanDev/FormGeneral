import './App.css';
import {LessonForm  } from './components/LessonForm';
import { UploadFileForm} from './components/UploadFileForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <UploadFileForm/>
      <LessonForm/>
    </div>
  );
}

export default App;

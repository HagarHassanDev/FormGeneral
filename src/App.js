import './App.css';
import {LessonForm  } from './components/LessonForm';
import { UploadFileForm} from './components/UploadFileForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';


// var param = JSON.stringify(data);
// var settings = {
//     "url": url,
//     "method": "POST",
//     "timeout": 0,
//     "headers": {
//         "Authorization": auth,
//         "IdToken": token_id,
//         "TENANT_ID": tenant,
//         "Content-Type": "application/json"
//     },
//     "data": param
// };


const accessToken = 'eyJraWQiOiJqaldRWjVocFMzVUtyUWdOamZkSDF3eEFkZTlMcmNVUlNjazZvXC9QNG1JND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyYzY4MTFmOS1iNjY0LTRmN2UtOGExOC0zNjk0OWEzNzQyMjIiLCJldmVudF9pZCI6ImIzOTkxZmM3LWY1OWYtNDlmNy1iMWU3LWZmM2Q2MTczNTE3MCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE2MTM5MTQwNjgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3llTk03WDJFbiIsImV4cCI6MTYxMzk0Mjg2OCwiaWF0IjoxNjEzOTE0MDY4LCJ2ZXJzaW9uIjoyLCJqdGkiOiIzMTYxYmI0ZS1hOWMyLTQyYTktYmY1NC05NzkwNjBiMmNiOTgiLCJjbGllbnRfaWQiOiI3Nmhoa2ZvbzBoNjkyczJjcDQ2Z2MzcDN1cCIsInVzZXJuYW1lIjoidXQxMSJ9.BCkqiKG41xH1FYC1MmNmbTteKzPdOEx1c0A_nMe20U0Voy7Tz15ioTgeQBu3m5RHKi5e8ul3xvFIEXSCoW5uwYn7xnhHeUHkCbQjYVF_NEMveApsBc8jbSIzJ3cQw8hfDWesRumBRjgxiXa2KCjt49-csI9YY7F5XYdFabuPunnGByCx0-5_4cehZD_rW18qca6jUnj26v_BuGe2KtdLP9WoRhbW4eU2ohbe7w7xUcraXaliuFwyoZ88vzRIjbVlQCxhGnV_xc14OWlmpjiuDwzSOC5RVYDyw1fwzVjkRfXMz1WpWr02JjnWebmEXYB2x4VVmDHi6ZaSjke80ilBHw';
const apiUrl = 'https://apis.eduedges.com/api/data/courses/instructionalroles';

const authAxios = axios.create({
  baseURL: apiUrl , 
  headers: {
    Authorization :`Bearer ${accessToken}`
  }
})


function App() {
  const [instructionalRoles , setInstructionalRoles ] = useState([]);

  const fetchData = useCallback(async ()=>{
    try {
      console.log("Hello from axios token ")
        const result = await authAxios.get();
        console.log(result);
        setInstructionalRoles(result.data);
    } catch (error) {
      console.log(error);
    }

  });


  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="App">

      <UploadFileForm/>
      <LessonForm/>
    </div>
  );
}

export default App;

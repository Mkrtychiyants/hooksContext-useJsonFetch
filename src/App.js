import useJsonFetch from './components/useJsonFetch/useJsonFetch'
import './App.css';

function App() {
 
   const [data, loading, error] = useJsonFetch("http://localhost:7070/data");
  //  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");
  // const [data, loading, error] = useJsonFetch("http://localhost:7070/error");

   console.log(data, loading, error);

   if (loading) {
    return  <div className='loadingDiv'>Загрузка..</div>  ;
  }
  if (error) {
    return  <div className='errorDiv'>Ошибка!{error.error}</div>  ;
  }
  if (data) {
    return <div className='dataDiv'>Дата с сервера: {data.status}</div>  ;
  }
  
}

export default App;

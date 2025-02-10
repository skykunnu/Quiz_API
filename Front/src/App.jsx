import instance from "./axiosConfig";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // fetchQuestions();
  }, []);

  async function fetchQuestions() {
    const response = await instance.get("/quiz/question/get/Programming");
    console.log(response.data);
  }

  async function next5Ques(page){
    const response=await instance.get(`/quiz/question/get/Programming/?page=${page}`)
    console.log(response.data);
  }


  return(

  <div>
<button onClick={fetchQuestions}>1</button>
<button onClick={()=>next5Ques(2)}>2</button>
  </div>
  ) 
}

export default App;

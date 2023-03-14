import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [data, setData] = useState([])
  function addData(inputData) {
    setData(prev => [...prev, inputData])
  }
  function deleteData(id){
    const filtered = data.filter((num,index) => index !== id);
    setData(filtered)
  }
  return (
    <div>
      <Header />
      <CreateArea
        addData={addData}
      />
      {data.map((item,index) =>
      <Note key={index} id={index} title={item.title} content={item.content} deleteData={deleteData} />
      )}
      <Footer />
    </div>
  );
}

export default App;

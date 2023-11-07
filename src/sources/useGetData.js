import { useState } from "react";
import axios from "axios";
const useGetData = () => {
  const [data, setdata] = useState([]);
  const [id, setid] = useState(0);
  const [loading, setloading] = useState(true);

  let getAdvice = async () => {
    try {
      let advice = await axios.get("https://api.adviceslip.com/advice");
      setdata(advice.data.slip.advice);
      setid(advice.data.slip.id);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(true);
    }
  };

  return { data, id, loading, setloading, getAdvice };
};

export default useGetData;

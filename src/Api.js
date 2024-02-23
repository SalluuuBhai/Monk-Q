import React, { useEffect, useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "react-bootstrap/Table";

const URL = "https://thecocktaildb.com/api/json/v1/1/search.php?f=b";

const Api = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const response = await Axios.get(URL);
      console.log("API Data :", response);
      setApiData(response.data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div >
        <table className="table table-striped table-dark" style={{border:"2px solid black"}}>
          <thead>
            <tr style={{border:"2px solid black"}}>
              <th>#</th>
              <th>Drink ID</th>
              <th>Drink Name</th>
              <th>Drink Alternate Name</th>
              <th>Tags</th>
              <th>Video</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data, index) => (
              <tr key={index} style={{border:"2px solid black"}}>
                <td>{index + 1}</td>
                <td>{data.idDrink}</td>
                <td>{data.strDrink}</td>
                <td>{data.strDrinkAlternate  || "No data"}</td>
                <td>{data.strTags  || "No data"}</td>
                <td>{data.strVideo  || "No data"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Api;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Await } from "react-router-dom";

const BreedList = () => {
  const [dataBreeds, setDataBreeds] = useState([]);
  const [imgBreed,setImgBreed] = useState("affenpinscher")
  const [imgDisplay,setImgDisplay] = useState('');
;
  useEffect(() => {
    async function fetchBreeds() {
      try {
        const res = await axios.get("https://dog.ceo/api/breeds/list/all");
        setDataBreeds(Object.keys(res.data.message));
        console.log(dataBreeds);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(dataBreeds);
    fetchBreeds();
  }, []);

  async function fetchBreedsIMG() {
    try {
      const res = await axios.get(
        `https://dog.ceo/api/breed/${imgBreed}/images/random`
      );
        setImgDisplay(res.data.message)
    } catch (error) {
      console.log(error);
    }
  }
 

  const handleChange = (event) => {
    const selectedBreed = event.target.value;
    // Lakukan apa pun yang Anda inginkan ketika pengguna memilih salah satu pilihan
    setImgBreed(selectedBreed)
   fetchBreedsIMG()
    console.log("Selected Breed:", selectedBreed);
  };

 

  return (
    <div className="breed-container">
      <h2 className="text-center mt-3">Select a Dog Breed</h2>
    
        <select onChange={handleChange}>
          <option value="">select breed</option>
          {dataBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <img src={imgDisplay}/>
      
    </div>
  );
};

export default BreedList;

import React, { useState,useEffect } from "react";
import {useStateValue} from '../../StateProvider';
import {db} from '../../firebase';
import "./ProfilePage.css";
import { SentimentSatisfiedOutlined } from "@material-ui/icons";

function ProfilePage() {
    const [{ user }, dispatch] = useStateValue();

    const [info, setInfo]= useState([]);


  const [edit, setEdit] = useState(false);

  const [snap,setSnap]=useState(true);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");


 


  useEffect( () => {
  
        if(user && snap){
            db
            .collection('profile')
            .doc(user?.uid)
            .get()
            .then(doc=>
                {
                    
                    doc.exists &&
                    setInfo(doc.data());
                }); 
           setSnap(false);  
        }
    }
  ,[user,edit]);






  console.log(info,snap);

  


  const changeEdit = () => {
    

    if (edit === false) {
      setEdit(true);
      setSnap(true);

      setName(info.name);
      setSurname(info.surname);
      setCountry(info.country);
      setCity(info.city);
      



    } else {
        db.collection('profile')
        .doc(user?.uid)
        .set({
            name:name,
            surname: surname,
            country: country,
            city:city
        })
      setEdit(false);
      setSnap(true);
    }
  };

 
 

  

  const whatToRender = () => {
    if (edit === true) {
      return (
        <div className='profile-page'>
          <div className='profile-card'>
            <div className='profile-left'>
              <img
                className='profile-image'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RdsUdYf4NijOdfoAn94IAJve-p4RBoA2KA&usqp=CAU'
              />
            </div>

            <div className='profile-right'>
              <div className='profile-info'>
                <p>Name:</p>  
                <input
                  className='profile-input'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='profile-info'>
                <p>Surname:</p>
                <input
                  className='profile-input'
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className='profile-info'>
                <p>Country:</p>
                <input
                  className='profile-input'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className='profile-info'>
                <p>City:</p>
                <input
                  className='profile-input'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className='profile-button'>
                <button onClick={changeEdit}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='profile-page'>
          <div className='profile-card'>
            <div className='profile-left'>
              <img
                className='profile-image'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RdsUdYf4NijOdfoAn94IAJve-p4RBoA2KA&usqp=CAU'
              />
            </div>

            <div className='profile-right'>
              <div className='profile-info-2'>
                <h4>Name: </h4>
                <p className='profile-p'>{info.name}</p>
              </div>
              <div className='profile-info-2'>
                <h4>Surname: </h4>
                <p className='profile-p'>{info.surname}</p>
              </div>
              <div className='profile-info-2'>
                <h4>Country: </h4>
                <p className='profile-p'>{info.country}</p>
              </div>
              <div className='profile-info-2'>
                <h4>City: </h4>
                <p className='profile-p'>{info.city}</p>
              </div>
              <div className='profile-button'>
                <button onClick={changeEdit}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{whatToRender()};</div>;
}

export default ProfilePage;

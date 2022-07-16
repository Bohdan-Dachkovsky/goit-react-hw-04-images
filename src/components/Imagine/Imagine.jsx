// import React, { useState } from 'react';
// import WatchProps from '../Loader/Watch.jsx';

// import PropTypes from 'prop-types';
// import s from '../../index.css';

export default function ImagineGallery() {
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  // const handleFetch = () => {
  //   setIsLoading(true);
  //   fetch('https://reqres.in/api/users?page=0')
  //     .then(respose => respose.json())
  //     .then(respose => {
  //       setUsers(respose.data);
  //       setIsLoading(false);
  //       // Optional code to simulate delay
  //       // setTimeout(() => {
  //       //   setUsers(respose.data);
  //       //   setIsLoading(false);
  //       // }, 3000);
  //     })
  //     .catch(() => {
  //       setErrorMessage('Unable to fetch user list');
  //       setIsLoading(false);
  //     });
  // };

  return (
    <div>
      {/* {isLoading ? (
        <WatchProps />
      ) : (
        <div className={s.userContainer}>
          {users.map((item, index) => (
            <div className={s.userContainer} key={index}>
              <img src={item.avatar} alt="" />
              <div>
                <div
                  className={s.firstName}
                >{`${item.first_name} ${item.last_name}`}</div>
                <div className={s.lastName}>{item.email}</div>
              </div>
            </div>
          ))}{' '} */}
      {/* </div>
      )} */}
      {/* // {errorMessage && <div c lassName={s.error}>{errorMessage}</div>}
      // {<Button click={handleFetch} disabled={isLoading} />} */}
      <ul type="submit"></ul>
    </div>
  );
}

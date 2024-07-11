import React, { useState, useEffect } from 'react';
import Profile from './components/profile.jsx';
import Edit from './components/edit.jsx';
import axios from 'axios';

function App() {
  const [userInfos, setUserInfos] = useState(null);
  const [modalState, setModalState] = useState({ isOpen: false, section: null });

  useEffect(() => {
    axios.get('http://localhost:3001/api/info')
      .then((response) => {
        setUserInfos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = async(section, updatedInfo) => {
    const newUserInfos = [...userInfos];
    newUserInfos[0] = { ...newUserInfos[0], [section]: updatedInfo };
    setUserInfos(newUserInfos);
    console.log(newUserInfos);
    setModalState({ isOpen: false, section: null });
    try {
      await axios.post(`http://localhost:3001/api/update/${newUserInfos[0]._id}`, newUserInfos)
      console.log("Task Updated");
    } catch (error) {
      console.log(error)
    }
  };

  const openModal = (section) => {
    setModalState({ isOpen: true, section });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, section: null });
  };

  return (
    <>
      <Profile userInfos={userInfos} openModal={openModal} />

      {modalState.isOpen && (
        <Edit
          section={modalState.section}
          userInfos={userInfos[0][modalState.section]}
          handleEdit={handleEdit}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default App;
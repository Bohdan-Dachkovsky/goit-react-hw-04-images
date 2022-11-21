import React, { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal/Modal'
import styled from 'styled-components'
import ImagineGallery from './components/ImagineGallery/ImagineGallery.jsx'
import Searchbar from './components/Searchbar/Searchbar'
import WatchProps from './components/Loader/Watch.jsx'
import './index.css'
import axios from 'axios'

const StyleButton = styled.button`
  background-color: rgba(60, 60, 87, 0.9);
  color: white;
  width: 50px;
  margin-left: 50px;
`

const App = () => {
  // const [name, setName] = useState([])
  const [modalImages, setModalImage] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  const loaderChange = () => {
    setIsLoading(!isLoading)
  }

  const largeImg = ({ image, createdAt }) => {
    setModalImage({
      image,
      createdAt,
    })
    setShowModal(true)
  }

  // const handlerSubmit = (pool) => {
  //   setName(pool)
  //   console.log(name)
  // }

  const handlerActive = () => {
    setShowModal(!showModal)
  }

  const onToggleModal = () => {
    setShowModal(!showModal)
  }

  // const loadPage = () => {
  //   setPage((prevState) => prevState + 1);
  // };

  useEffect(() => {
    const axiosPhoto = () => {
      return axios
        .get(
          `https://62f7984e73b79d01535aee13.mockapi.io/api/u1/fake-images?page=1`,
        )
        .then(({ data }) => {
          setItems(data)
        })
        .catch((error) => {
          setError(true)
          console.log(error.message)
        })
    }
    axiosPhoto()
  }, [])

  return (
    <div>
      <Searchbar />

      {showModal && <Modal onActive={onToggleModal} onClick={modalImages} />}
      {isLoading ? (
        <WatchProps />
      ) : (
        <ImagineGallery
          items={items}
          error={error}
          onLoader={loaderChange}
          onShow={largeImg}
          onActive={handlerActive}
        ></ImagineGallery>
      )}
      {/* onClick={loadPage} */}
      <StyleButton>Load More</StyleButton>
    </div>
  )
}
export default App

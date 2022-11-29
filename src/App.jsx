import React, { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal/Modal'
import ImagineGallery from './components/ImagineGallery/ImagineGallery.jsx'
import Searchbar from './components/Searchbar/Searchbar'
import WatchProps from './components/Loader/Watch.jsx'
import LoaderButton from './LoaderButton/LoaderButton.jsx'
import './index.css'
import axios from 'axios'

const App = () => {
  const [name, setName] = useState([])
  const [modalImages, setModalImage] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  const [page, setPage] = useState({ page: 1 })
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

  const handlerSubmit = (pool) => {
    setName(pool)
    console.log(name)
  }

  const handlerActive = () => {
    setShowModal(!showModal)
  }

  const onToggleModal = () => {
    setShowModal(!showModal)
  }

  const loadPage = () => {
    setPage((prevState) => ({ page: prevState.page + 1 }))
  }

  useEffect(() => {
    const axiosPhoto = () => {
      return axios
        .get(
          `https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=${name}&page=${page}&per_page=12&image_type=photo`,
        )
        .then(({ data }) => {
          setItems((prevState) => [...prevState, ...data.hits])
          console.log(data)
        })
        .catch((error) => {
          setError(true)
          console.log(error.message)
        })
    }
    axiosPhoto()
  }, [name, page])

  return (
    <div>
      <Searchbar onSubmit={handlerSubmit} />

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

      <LoaderButton onClick={loadPage} />
    </div>
  )
}
export default App

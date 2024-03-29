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
  const [name, setSearchName] = useState('')
  const [modalImages, setModalImage] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [onShow, SetOnShow] = useState(false)
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const loaderChange = () => {
    setIsLoading(!isLoading)
  }

  const largeImg = ({ user, webformatURL }) => {
    setModalImage({
      user,
      webformatURL,
    })
    setShowModal(true)
  }
  const submitSearch = (search) => {
    setSearchName(search)
    setPage(1)
    setItems([])
  }
  const handlerActive = () => {
    setShowModal(!showModal)
  }

  const onToggleModal = () => {
    setShowModal(!showModal)
  }

  const loadPage = () => {
    setPage((prevState) => prevState + 1)
  }
  console.log(name)

  useEffect(() => {
    SetOnShow(false)
    const axiosPhoto = () => {
      return axios
        .get(
          `https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=${name}&page=${page}&per_page=15&image_type=photo`,
        )
        .then(({ data }) => {
          setItems((prevState) => [...prevState, ...data.hits])
          SetOnShow(true)
        })
        .catch((error) => {
          setError(true)
          console.log(error.message)
        })
    }
    if (name.length > 0) {
      axiosPhoto()
    }
  }, [name, page])

  return (
    <div>
      <Searchbar onSubmit={submitSearch} />

      {showModal && <Modal onActive={onToggleModal} onClick={modalImages} />}
      {isLoading ? (
        <WatchProps />
      ) : (
        onShow && (
          <ImagineGallery
            items={items}
            error={error}
            onLoader={loaderChange}
            onShow={largeImg}
            onActive={handlerActive}
          ></ImagineGallery>
        )
      )}

      <LoaderButton onClick={loadPage} />
    </div>
  )
}
export default App

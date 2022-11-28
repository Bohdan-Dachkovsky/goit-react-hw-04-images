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
  const ACCESS_KEY = 'Cj2GfrQNcbgsABdxizXkH9ojeNmYsZEpqsvVkWav3uY'
  // const [name, setName] = useState([])
  const [modalImages, setModalImage] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const loaderChange = () => {
    setIsLoading(!isLoading)
  }

  const largeImg = ({ links, published_at }) => {
    setModalImage({
      links,
      published_at,
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

  const loadPage = () => {
    setPage((prevState) => ({ page: prevState.page + 1 }))
  }

  useEffect(() => {
    const axiosPhoto = () => {
      return axios
        .get(
          `https://api.unsplash.com/search/collections?client_id=${ACCESS_KEY}&page=${page}&query=library&language=en`,
        )
        .then(({ data }) => {
          setItems((prevState) => [...prevState, ...data.results])
          console.log(data.results)
        })
        .catch((error) => {
          setError(true)
          console.log(error.message)
        })
    }
    axiosPhoto()
  }, [page])

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

      <LoaderButton onClick={loadPage} />
    </div>
  )
}
export default App

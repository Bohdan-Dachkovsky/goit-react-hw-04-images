import React, { useEffect, useState, useRef } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal/Modal'
import ImagineGallery from './components/ImagineGallery/ImagineGallery.jsx'
import Searchbar from './components/Searchbar/Searchbar'
import WatchProps from './components/Loader/Watch.jsx'
import LoaderButton from './LoaderButton/LoaderButton.jsx'
import './index.css'
import axios from 'axios'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

const App = () => {
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
    setPage((prevState) => ({ page: prevState.page + 10 }))
  }
  const prevData = usePrevious(items)
  useEffect(() => {
    const axiosPhoto = () => {
      return axios
        .get(
          `https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=${pool}&page=${page}&per_page=12&image_type=photo`,
        )
        .then(({ data }) => {
          setItems((prevState) => [...prevState.items, ...data.hits])
        })
        .catch((error) => {
          setError(true)
          console.log(error.message)
        })
    }
    axiosPhoto()
  }, [prevData, page])

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

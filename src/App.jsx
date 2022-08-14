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
  const [state, setState] = useState({
    pool: '',
    modalImages: {},
    showModal: false,
    isLoading: false,
    items: [],
    error: null,
    page: 6,
  })

  const loaderChange = () => {
    setState((prevState) => ({ isLoading: !prevState.isLoading }))
  }

  const largeImg = ({ largeImageURL, tags }) => {
    setState({
      showModal: true,
      modalImages: { largeImageURL, tags },
    })
  }
  const handlerSubmit = (pool) => {
    setState({ pool: pool })
  }
  const handlerActive = () => {
    setState((showModal) => ({ showModal: !showModal }))
  }

  const onToggleModal = () => {
    setState((prevState) => ({ showModal: !prevState.showModal }))
  }

  useEffect(() => {
    const axiosPhoto = () => {
      return axios
        .get(`https://62f7984e73b79d01535aee13.mockapi.io/api/u1/fake-images`)
        .then(({ data }) => {
          setState({ items: data })
        })
        .catch((error) => console.log(error.messages))
    }
    axiosPhoto()
  }, [])

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=${state.pool}&page=${state.page}&per_page=12&image_type=photo`,
  //     )
  //     .then(({ data }) => {
  //       setState({ items: data.hits })
  //     })
  //     .catch((error) => this.setState({ error: error.message }))
  // }, [state.page, state.pool])

  const loadPage = () => {
    setState((prevState) => ({ page: prevState.page + 1 }))
  }

  const { items, showModal, error, isLoading } = state

  return (
    <div>
      <Searchbar  onSubmit={handlerSubmit} />
      {showModal && <Modal onActive={onToggleModal} />}
      {isLoading ? (
        <WatchProps />
      ) : (
        <ImagineGallery
          items={items}
          error={error}
          onLoader={loaderChange}
          onBox={handlerActive}
          onShow={largeImg}
        ></ImagineGallery>
      )}
      <StyleButton onClick={loadPage}>Load More</StyleButton>
    </div>
  )
}
export default App

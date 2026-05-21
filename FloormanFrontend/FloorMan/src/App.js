import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie'

import Context from './Context'

import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'


import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkMode: false,
    showBanner: true,
    likedVideos: [],
    disLikedVideos: [],
    savedVideos: [],
    likedVideosIds: [],
    disLikedVideosIds: [],
    savedVideosIds: [],
    decodedToken : null,
  }

  changeMode = () => {
    this.setState(previousState => ({isDarkMode: !previousState.isDarkMode}))
  }

  clickedCross = () => {
    this.setState({showBanner: false})
  }

  clickedLike = video => {
    const {
      likedVideosIds,
      likedVideos,
      disLikedVideos,
      disLikedVideosIds,
    } = this.state

    if (!likedVideosIds.includes(video.id)) {
      const updatedLikedVideosIds = [...likedVideosIds, video.id]
      const updatedLikedVideos = [...likedVideos, video]

      const updatedDisLikedVideos = disLikedVideos.filter(
        eachItem => !(video.id === eachItem.id),
      )
      const updatedDisLikedVideosIds = disLikedVideosIds.filter(
        eachItem => !(video.id === eachItem),
      )

      this.setState({
        likedVideos: [...updatedLikedVideos],
        likedVideosIds: [...updatedLikedVideosIds],
        disLikedVideos: [...updatedDisLikedVideos],
        disLikedVideosIds: [...updatedDisLikedVideosIds],
      })
    } else {
      const updatedLikedVideosIds = likedVideosIds.filter(
        eachItem => !(video.id === eachItem),
      )
      const updatedLikedVideos = likedVideos.filter(
        eachItem => !(video.id === eachItem.id),
      )

      this.setState({
        likedVideosIds: [...updatedLikedVideosIds],
        likedVideos: [...updatedLikedVideos],
      })
    }
  }

  clickedDisLike = video => {
    const {
      disLikedVideos,
      disLikedVideosIds,
      likedVideosIds,
      likedVideos,
    } = this.state

    if (!disLikedVideosIds.includes(video.id)) {
      const updatedDisLikedVideosIds = [...disLikedVideosIds, video.id]
      const updatedDisLikedVideos = [...disLikedVideos, video]

      const updatedLikedVideos = likedVideos.filter(
        eachItem => !(video.id === eachItem.id),
      )
      const updatedLikedVideosIds = likedVideosIds.filter(
        eachItem => !(video.id === eachItem),
      )

      this.setState({
        disLikedVideos: [...updatedDisLikedVideos],
        disLikedVideosIds: [...updatedDisLikedVideosIds],
        likedVideos: [...updatedLikedVideos],
        likedVideosIds: [...updatedLikedVideosIds],
      })
    } else {
      const updatedDisLikedVideosIds = disLikedVideosIds.filter(
        eachItem => !(video.id === eachItem),
      )
      const updatedDisLikedVideos = disLikedVideos.filter(
        eachItem => !(video.id === eachItem.id),
      )

      this.setState({
        disLikedVideosIds: [...updatedDisLikedVideosIds],
        disLikedVideos: [...updatedDisLikedVideos],
      })
    }
  }

  clickedSave = video => {
    const {savedVideosIds, savedVideos} = this.state

    if (!savedVideosIds.includes(video.id)) {
      const updatedSavedVideosIds = [...savedVideosIds, video.id]
      const updatedSavedVideos = [...savedVideos, video]

      this.setState({
        savedVideos: [...updatedSavedVideos],
        savedVideosIds: [...updatedSavedVideosIds],
      })
    } else {
      const updatedSavedVideosIds = savedVideosIds.filter(
        eachItem => !(video.id === eachItem),
      )
      const updatedSavedVideos = savedVideos.filter(
        eachItem => !(video.id === eachItem.id),
      )

      this.setState({
        savedVideosIds: [...updatedSavedVideosIds],
        savedVideos: [...updatedSavedVideos],
      })
    }
  }





  render() {

    const {
      isDarkMode,
      showBanner,
      likedVideos,
      disLikedVideos,
      savedVideos,
      likedVideosIds,
      disLikedVideosIds,
      savedVideosIds,
      decodedToken,
    } = this.state

    console.log(decodedToken)
    return (
      <Context.Provider
        value={{
          isDarkMode,
          changeMode: this.changeMode,
          clickedCross: this.clickedCross,
          showBanner,
          likedVideos,
          disLikedVideos,
          savedVideos,
          onClickLike: this.clickedLike,
          onClickDisLike: this.clickedDisLike,
          onClickSave: this.clickedSave,
          likedVideosIds,
          disLikedVideosIds,
          savedVideosIds,
          token: decodedToken,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/vehicleDetail/:id" component={VideoDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App

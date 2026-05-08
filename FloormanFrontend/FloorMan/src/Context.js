import React from 'react'

const Context = React.createContext({
  isDarkMode: false,
  changeMode: () => {},
  clickedCross: () => {},
  showBanner: true,
  likedVideos: [],
  disLikedVideos: [],
  savedVideos: [],
  onClickLike: () => {},
  onClickDisLike: () => {},
  onClickSave: () => {},
  likedVideosIds: [],
  disLikedVideosIds: [],
  savedVideosIds: [],
  token: null,
})

export default Context

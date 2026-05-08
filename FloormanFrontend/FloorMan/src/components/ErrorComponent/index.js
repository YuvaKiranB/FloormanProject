import Context from '../../Context'

import {
  ErrorContainer,
  ErrorImage,
  ErrorHeading,
  ErrorPara,
  RetryButton,
} from './styling'

const ErrorCard = props => {
  const {clickedRetry} = props

  return (
    <Context.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <ErrorContainer>
            {isDarkMode ? (
              <ErrorImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            ) : (
              <ErrorImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            )}

            <ErrorHeading isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </ErrorHeading>
            <ErrorPara isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again.
            </ErrorPara>
            <RetryButton onClick={clickedRetry}>Retry</RetryButton>
          </ErrorContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default ErrorCard

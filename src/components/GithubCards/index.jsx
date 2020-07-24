import React, { useState } from 'react'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faSpinner } from '@fortawesome/free-solid-svg-icons'

// styles
import ListCardStyle from './ListCardStyle'
import ImageSpinner from '../ImageSpinner'

const awesomeSpin = <FontAwesomeIcon icon={faSpinner} pulse spin size='4x' />

const defaultPalette = {
  colorOne: '#7c3c21',
  colorTwo: '#ec823a',
  colorThree: '#f9c49a',
  colorFour: '#e8e4e1'
}
const defaultProjectList = [
  {
    title: 'nifty components',
    thumb: '/nifty.png',
    alt: 'project screenshot',
    desc: 'React, HTML, Inline-CSS',
    hosted: 'https://www.npmjs.com/package/nifty-components',
    source: 'https://github.com/debauchery1st/nifty-components',
    tldr: ''
  },
  {
    title: 'nifty components',
    thumb: '/nifty.png',
    alt: 'project screenshot',
    desc: 'React, HTML, Inline-CSS',
    hosted: 'https://www.npmjs.com/package/nifty-components',
    source: 'https://github.com/debauchery1st/nifty-components',
    tldr: ''
  }
] // card listview
const ListCard = ({
  key,
  title,
  briefdesc,
  // cardtags,
  avatar,
  portrait,
  tldr,
  isOpen,
  toggleOpen,
  isSelected,
  selectCard,
  cardNumber,
  hostedURL,
  sourceURL,
  srcIcon,
  appIcon,
  spinner,
  ...rest
}) => {
  const [state, setState] = useState({
    url: undefined,
    loading: true
  })
  const {
    parentStyle,
    leftStyle,
    // rightStyle,
    mainStyle,
    expandedStyle,
    linkStyle,
    imgStyle,
    imgFrameStyle
  } = ListCardStyle({
    palette: rest.palette || defaultPalette,
    portrait,
    rest,
    isSelected,
    isOpen,
    srcIcon,
    appIcon
  })
  const palette = rest.palette || defaultPalette
  return (
    <div
      key={key}
      id={`card-${key}`}
      name={`card-${key}`}
      style={isOpen ? expandedStyle : parentStyle}
      onMouseEnter={() => selectCard(cardNumber)}
      onMouseLeave={() => selectCard(undefined)}
      onClick={(e) => {
        selectCard(cardNumber)
        toggleOpen(cardNumber)
        e.target.scrollIntoView() // document.querySelector(`#card-${key}`).scrollIntoView();
      }}
    >
      <div className='nifty-card-left list-view' style={leftStyle}>
        <div style={imgFrameStyle}>
          <ImageSpinner
            style={imgStyle}
            src={avatar || 'https://avatarfiles.alphacoders.com/289/289.jpg'}
            alt='avatar'
            customspinner={spinner || awesomeSpin}
          />
        </div>
        {isOpen ? (
          <span className='nifty-card-links' style={linkStyle}>
            <a
              href={sourceURL}
              alt='source code'
              target='_blank'
              rel='noopener noreferrer'
              onMouseOver={() => setState({ url: sourceURL })}
              onMouseLeave={() => setState({ url: undefined })}
            >
              <FontAwesomeIcon
                icon={srcIcon || faGithub}
                color={
                  state.url === sourceURL ? palette.colorFour : palette.colorTwo
                }
              />
            </a>
            <a
              href={hostedURL}
              alt='web application'
              target='_blank'
              rel='noopener noreferrer'
              onMouseOver={() => setState({ url: hostedURL })}
              onMouseLeave={() => setState({ url: undefined })}
            >
              <FontAwesomeIcon
                icon={faGlobe}
                color={
                  state.url === hostedURL ? palette.colorFour : palette.colorTwo
                }
              />
            </a>
          </span>
        ) : (
          ''
        )}
      </div>
      <main className='nifty-card-main list-view' style={mainStyle}>
        <p
          style={{
            padding: isOpen ? '0 2ch' : '0 0',
            // fontWeight: "bold",
            fontWeight: 500,
            fontFamily: "'Fira Code', monospace"
          }}
        >
          {title || 'Hello World'}
        </p>
        <p
          style={{
            padding: isOpen ? '0 2ch' : '0 0',
            fontSize: '1rem',
            fontFamily: "'Fira Code', monospace",
            fontStyle: 'italic'
          }}
        >
          {briefdesc || 'somewhere, on earth'}
        </p>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            padding: isOpen ? '0 2ch' : '0 0',
            color: 'darkslategrey'
          }}
        >
          {isOpen ? tldr || '#JS, #React' : '...'}
        </p>{' '}
      </main>
      {/* <div className="nifty-card-right list-view" style={rightStyle} /> */}
    </div>
  )
}

const ListCardTable = (props) => {
  return (
    <div
      className='list-card-table'
      style={{ width: '95vw', marginTop: '1rem', ...props.style }}
    >
      {props.cards}
    </div>
  )
}

const GithubCards = ({
  projectlist,
  width,
  palette,
  srcIcon,
  appIcon,
  spinner
}) => {
  const maxWidth = width || '42rem'
  const projects = projectlist || defaultProjectList
  const [selected, setSelected] = useState({
    key: undefined,
    opened: undefined
  })
  const selectCard = (key) => {
    selected.opened === undefined && setSelected({ key })
  }
  const toggleOpen = (key) => {
    if (selected.key === key) {
      if (selected.opened === key) {
        setSelected({ key: undefined, opened: undefined }) // close card
      } else {
        setSelected({ ...selected, opened: key }) // select and open
      }
    }
  }
  return (
    <ListCardTable
      style={{
        maxWidth,
        display: 'flex',
        flexDirection: 'column',
        margin: '2ch'
      }}
      cards={projects.map(
        (
          {
            title,
            thumb,
            alt,
            desc: briefdesc,
            hosted: hostedURL,
            source: sourceURL,
            portrait,
            tldr
          },
          key
        ) =>
          ListCard({
            key: key + 1,
            title,
            briefdesc,
            cardtags: alt,
            avatar: thumb,
            tldr,
            toggleOpen: () => toggleOpen(key + 1),
            selectCard: () => selectCard(key + 1),
            isSelected: selected.key === key + 1,
            isOpen: selected.opened === key + 1,
            cardNumber: key + 1,
            palette,
            hostedURL,
            sourceURL,
            portrait,
            srcIcon,
            appIcon,
            spinner
          })
      )}
    />
  )
}

export default GithubCards

export { ListCard, ListCardTable }

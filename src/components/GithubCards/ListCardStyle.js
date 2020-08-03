function ListCardStyle({
  palette,
  portrait,
  rest,
  isSelected,
  isOpen,
  borderColorSelected,
  borderColorNormal,
  backgroundColor,
  titleColor,
  textColor
}) {
  const leftStyle = {
    gridColumn: isOpen ? '1 / 4' : '1 / 2',
    backgroundColor: backgroundColor || '#FFFFFF',
    color: titleColor || 'darkgrey',
    paddingLeft: '2ch',
    paddingRight: '2ch',
    transition: 'all .5s ease',

    ...rest.leftStyle
  }
  const mainStyle = {
    gridColumn: isOpen ? '1 / 4' : '2 / 3',
    backgroundColor: backgroundColor || '#FFFFFF',
    color: textColor || 'darkslategrey',
    textAlign: 'left',
    letterSpacing: '1px',
    transition: 'all .5s ease',

    ...rest.mainStyle
  }
  // const rightStyle = {
  //   gridColumn: isOpen ? "4/4" : "3 / 4",
  //   backgroundColor: "darkgrey",
  //   color: "white",
  //   textAlign: "right",
  //   transition: "all .5s ease",

  //   ...rest.rightStyle,
  // };
  const parentStyle = {
    display: 'grid',
    fontFamily: 'open sans',
    gridTemplate: 'auto 1fr auto / auto 1fr auto',
    paddingBottom: '1px',
    border: isSelected
      ? `1px solid ${borderColorSelected || palette.colorTwo}`
      : `1px solid ${borderColorNormal || palette.colorFour}`,
    transition: 'all .5s ease',
    ...rest.parentStyle
  }
  const expandedStyle = {
    ...parentStyle,
    height: '200%',
    // top: 0,
    // margin: "2ch 0 ",
    // position: "fixed",
    // zIndex: 100,
    maxWidth: '42rem',
    ...rest.expandedStyle
  }
  const linkStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '4rem',
    transition: 'all .5s ease',

    ...rest.linkStyle
  }
  const imgStyle = {
    minHeight: '7rem',
    maxHeight: '15rem',
    maxWidth: isOpen ? '20rem' : !portrait ? '10rem' : '5rem',
    borderRadius: '1rem',
    paddingTop: '1ch',
    paddingBottom: '1ch',
    transition: 'all .5s ease',
    ...rest.imgStyle,
    display: 'flex'
  }
  const imgFrameStyle = {
    maxWidth: isOpen ? '100%' : portrait ? '20rem' : '10rem',
    // width: "100%",
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
    alignItems: 'center',
    transition: 'all .5s ease'
  }
  return {
    parentStyle,
    leftStyle,
    // rightStyle,
    mainStyle,
    expandedStyle,
    linkStyle,
    imgStyle,
    imgFrameStyle
  }
}

export default ListCardStyle

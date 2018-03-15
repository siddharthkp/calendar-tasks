const styleTag = document.createElement('style')
styleTag.setAttribute('title', 'maker')
document.head.appendChild(styleTag)

const setup = () => {
  styleTag.innerHTML = `
    body { cursor: copy; }
    .RDlrG.J9Nfi.iWO5td { opacity: 0 !important; }
    .k77Iif-nUpftc-psdQ5e { opacity: 0 !important; }
  `
}

const destroy = () => (styleTag.innerHTML = '')

export default { setup, destroy }

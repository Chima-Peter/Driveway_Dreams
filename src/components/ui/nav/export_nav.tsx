import MediaQuery from 'react-responsive'
import MobileNav from './mobile_nav.js'
import DesktopNav from './desktop_nav.js'
import ModalProvider from '../../context/modal_context.js'


const ExportNav = () => {
  return (
    // wrap the entire nav with the modal context
    <ModalProvider>
        <MediaQuery maxWidth={1000}>
            <MobileNav />
        </MediaQuery>
        <MediaQuery minWidth={1001}>
            <DesktopNav />
        </MediaQuery>
    </ModalProvider>
  )
}

export default ExportNav
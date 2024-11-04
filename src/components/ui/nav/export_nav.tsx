import MediaQuery from 'react-responsive'
import MobileNav from './mobile_nav.js'
import DesktopNav from './desktop_nav.js'


const ExportNav = () => {
  return (
    <>
        <MediaQuery maxWidth={1000}>
            <MobileNav />
        </MediaQuery>
        <MediaQuery minWidth={1001}>
            <DesktopNav />
        </MediaQuery>
    </>
  )
}

export default ExportNav
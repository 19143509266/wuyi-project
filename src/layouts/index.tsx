import { Outlet } from 'umi'
import styles from './index.less'
import Slider from './Slider'

export default function Layout() {
  return (
    <div className={styles.layout}>
      {/* <div className={styles.menu}>
        <Slider />
      </div> */}
      {/* <div className={styles.outlet}> */}
      <Outlet />
      {/* </div> */}
    </div>
  )
}

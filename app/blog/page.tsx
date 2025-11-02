import { JSX, lazy, Suspense } from 'react'
import styles from './blog.module.css'


const Comp = lazy((): any => import('./components/Component'));

const page = () => {
  return (
    <Suspense fallback={<Meow />}>
        <Comp />
    </Suspense>
  )
}
export default page

const Meow = () => {
  return (
    <div className={styles.div}>page</div>
  )
}
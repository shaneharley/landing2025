//import tools
import parse from 'html-react-parser';

//import styles
import styles from '@/components/projects/projectHeroText.module.css'

export default function ProjectHeroText(props) {
  return (
    <>
      <h2 className={`${styles.title}`}>
        {parse(props.title)}
      </h2>
      <p className={`${styles.blurb}`}>
        {parse(props.blurb)}
      </p>
    </>
  )
}

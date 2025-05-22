//import tools
import parse from 'html-react-parser';

//import styles
import styles from '@/components/projects/projectRow.module.css'

export default function ProjectRow(props) {
  return (
    <div className={`${styles.row}`}>
      <p className={`${styles.company}`}>
        {parse(props.projectItem.company)}
      </p>
      <p className={`${styles.project}`}>
        {parse(props.projectItem.project)}
      </p>
    </div>
  )
}

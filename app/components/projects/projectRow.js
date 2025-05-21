//import tools
import parse from 'html-react-parser';

//import styles
import styles from '@/components/projects/projectRow.module.css'

export default function ProjectRow(props) {
  if (props.project) {
    const project = props.project
    return (
      <div className={`${styles.row}`}>
        <p className={`${styles.company}`}>
          {parse(project.company)}
        </p>
        <p className={`${styles.project}`}>
          {parse(project.project)}
        </p>
      </div>
    )
  }
}

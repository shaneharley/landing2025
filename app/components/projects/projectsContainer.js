import ProjectHeroText from '@/components/projects/projectHeroText'
import ProjectRow from '@/components/projects/projectRow'

import styles from '@/components/projects/projectsContainer.module.css'

export default function ProjectsContainer(props) {
  const text = props.featuredProjects
  const projectItem = props.featuredProjects.projects
  const projectsArray = Object.keys(projectItem).map(key => ({ ...projectItem[key], "key": key }));

  return (
    <section className={`grid`}>
      <ProjectHeroText {...text} />
      <div className={`${styles.projectRows}`}>
        <div className={`${styles.rowHeading}`}>
          <p className={`${styles.company}`}>
            Company
          </p>
          <p className={`${styles.project}`}>
            Project
          </p>
        </div>
        {projectsArray.map(projectItem => (
          <ProjectRow projectItem={(projectItem)} key={projectItem.id} />
        ))}
      </div>
    </section>
  )
}

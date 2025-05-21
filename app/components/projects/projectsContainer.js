import ProjectHeroText from '@/components/projects/projectHeroText'
import ProjectRow from '@/components/projects/projectRow'

import styles from '@/components/projects/projectsContainer.module.css'

export default function ProjectsContainer(props) {
  const text = props.data.featuredProjects
  const projects = text.projects;
  const projectsArray = Object.keys(projects).map(key => ({ ...projects[key], "key": key }));

  return (
    <section className={`grid`}>
      <ProjectHeroText {...text} />
      <ProjectRow />
      <div className={`${styles.projectRows}`}>
        <div className={`${styles.rowHeading} tableHeadings`}>
          <p className={`${styles.company}`}>
            Company
          </p>
          <p className={`${styles.project}`}>
            Project
          </p>
        </div>
        {projectsArray.map(project => (
          <ProjectRow project={(project)} key={project.id} />
        ))}
      </div>
    </section>
  )
}

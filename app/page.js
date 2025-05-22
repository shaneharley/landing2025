//import tools
import { promises as fs } from 'fs';

//import components
import ProjectsContainer from "@/components/projects/projectsContainer"
import ContactContainer from '@/components/contact/contactContainer';

//import data
import "@/data/cms"

export default async function Home() {
  //CMS
  const file = await fs.readFile(process.cwd() + '/app/data/cms.json');
  const CMS = JSON.parse(file)

  return (
    <>
      <ProjectsContainer {...CMS} />
      <ContactContainer {...CMS} />
    </>
  );
}

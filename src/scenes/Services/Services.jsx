
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Services.module.scss';
import ProjectCard from './ServicesCard/ServicesCard'

import latexLogo from '../../assets/latex-logo.png'
import bookStack from '../../assets/bookstack.png'
import search from '../../assets/search.png'

const Services = () => {
  return (
    <BaseLayout>
      <div className={s.content} id='services'>
      <h1 className={s.sectionTitle}>
            MY <span className={s.purple}> SERVICES </span>
          </h1>
        <div className={s.about}>
          <ProjectCard image={latexLogo} title="LaTeX Document Conversion" description={"From handwritten notes to fully formatted LaTeX documents, I specialize in converting a wide range of materials with meticulous accuracy."}/>
          <ProjectCard image={bookStack} title="Research Support" description={"Whether you need help formatting your thesis, dissertation, or research article, I provide high-quality LaTeX formatting and editing services to meet journal requirements."}/>
          <ProjectCard image={search} title="Academic Collaboration" description={"I am eager to collaborate with academics and institutions on long-term projects that require expertise in mathematics and technical writing."}/>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Services;

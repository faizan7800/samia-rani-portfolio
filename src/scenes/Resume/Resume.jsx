import { useEffect, useRef, useState } from 'react';
import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';
//react-pdf
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink =
  'https://raw.githubusercontent.com/faizan7800/samia-rani-portfolio/main/EJCzyN.pdf';

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);
  useEffect(() => {
    setPdfPageWidth(
      pdfWrapper.current?.getBoundingClientRect().width || null,
    );
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent',
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };

  const [cvPage, setCvPage] = useState(1);
  return (
    <BaseLayout layout="resume">
      <div className={s.content} id='resume'>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>

        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            pageLayout="twoColumnLeft"
            file={{
              url: resumeLink,
            }}
          >
            <Page
              onLoadSuccess={removeTextLayerOffset}
              loading={<LinerProgress />}
              width={pdfPageWidth}
              pageNumber={cvPage}
            />
          </Document>
        </div>
        <div className={s.buttons}>
          <Button 
          style={{ margin: 'auto', width: '15rem' }}
          className="primary" onClick={()=>{if(cvPage > 0) {let decPage = cvPage - 1; setCvPage(decPage)}}} disabled={cvPage===1}>Prev</Button>
          <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
           onClick={()=>{if(cvPage <= 4) {let incPage = cvPage + 1; setCvPage(incPage)}}} disabled={cvPage===4}>Next</Button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;

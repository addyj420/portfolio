import { Footer } from 'components/Footer';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';
import dynamic from 'next/dynamic';

const DisplacementSphere = dynamic(() =>
  import('layouts/Home/DisplacementSphere').then(mod => mod.DisplacementSphere)
);

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Skills"
        description="Some of the skills I possess."
      />
      <ProjectContainer className={styles.uses}>
        <DisplacementSphere />
        <ProjectHeader
          title="Skills"
          description="A somewhat comprehensive list of tools, apps and more that I use on a daily basis to design, code and manage things."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Business</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>Stakeholder Management</ListItem>
                  <ListItem>Strategy</ListItem>
                  <ListItem>Communication</ListItem>
                  <ListItem>Agile Project Management</ListItem>
                  <ListItem>Product Management</ListItem>
                  <ListItem>Project planning</ListItem>
                  <ListItem>Scrum</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Technical skills/tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>Data Analysis</ListItem>
                  <ListItem>Figma and balsamic prototype/ wireframe designing</ListItem>
                  <ListItem>Confluence</ListItem>
                  <ListItem>Jira</ListItem>
                  <ListItem>Python Programming</ListItem>
                  <ListItem>Microsoft Office (Excel/Powerpoint)</ListItem>
                  <ListItem>Power BI</ListItem>
                  <ListItem>Visio</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <ProjectSection padding="none" className={styles.section}>
        <ProjectSectionContent>
          <ProjectTextRow width="m">
            <ProjectSectionHeading>Others</ProjectSectionHeading>
            <ProjectSectionText as="div">
              <List>
                <ListItem>Written communication (check out my medium blogs)</ListItem>
                <ListItem>Logo Designing (check out my Behance portfolio)</ListItem>
              </List>
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSectionContent>
      </ProjectSection>
      <Footer />
    </Fragment>
  );
};

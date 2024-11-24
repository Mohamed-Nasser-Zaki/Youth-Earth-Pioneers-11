import React from 'react';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectCategories from '../components/projects/ProjectCategories';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import InvestorMentorCTA from '../components/projects/InvestorMentorCTA';
import SuccessStories from '../components/projects/SuccessStories';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <ProjectsHero />
      <ProjectCategories />
      <FeaturedProjects />
      <ProjectsGrid />
      <InvestorMentorCTA />
      <SuccessStories />
    </div>
  );
};

export default ProjectsPage;
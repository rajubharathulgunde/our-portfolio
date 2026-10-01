import { Hero } from '../components/home/Hero';
import { Brands } from '../components/home/Brands';
import { Services } from '../components/services/Services';
import { Projects } from '../components/projects/Projects';
import { Team } from '../components/team/Team';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Services />
      <Projects />
      <Team />
    </div>
  );
};
import React from 'react';
import RevealAnimation from './RevealAnimation';
import ImageWithFallback from './ImageWithFallback';
import { Card, CardContent } from './ui/card';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <span className="inline-block py-1 px-3 mb-3 text-xs tracking-wider uppercase rounded-full bg-secondary text-primary font-medium">About Us</span>
        </RevealAnimation>
        
        <RevealAnimation delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Fostering Innovation & Entrepreneurship</h2>
        </RevealAnimation>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <RevealAnimation delay={200}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students collaborating"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </RevealAnimation>
          
          <div className="space-y-6">
            <RevealAnimation delay={300}>
              <p className="text-lg text-white">
                The Entrepreneurship Cell (E-Cell) is a student-run organization dedicated to promoting the spirit of entrepreneurship among students. We provide a platform for aspiring entrepreneurs to transform their innovative ideas into successful ventures.
              </p>
            </RevealAnimation>
            
            <RevealAnimation delay={400}>
              <p className="text-lg text-white">
                Through workshops, speaker sessions, mentorship programs, and competitions, we aim to equip students with the knowledge, skills, and network necessary to thrive in the entrepreneurial ecosystem.
              </p>
            </RevealAnimation>
            
            <RevealAnimation delay={500}>
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-5xl font-bold text-blue-400">50+</h3>
                  <p className="text-sm text-sky-200 font-medium">Events Organized</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-5xl font-bold text-blue-400">5000+</h3>
                  <p className="text-sm text-sky-200 font-medium">Students Impacted</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-5xl font-bold text-blue-400">20+</h3>
                  <p className="text-sm text-sky-200 font-medium">Startups Incubated</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-5xl font-bold text-blue-400">100+</h3>
                  <p className="text-sm text-sky-200 font-medium">Industry Partners</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <RevealAnimation delay={600}>
            <Card className="bg-background/95 dark:bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-secondary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-foreground">
                  To foster a culture of innovation and entrepreneurship by empowering students and aspiring entrepreneurs with the skills, resources, and mentorship needed to transform ideas into successful ventures. We aim to bridge the gap between academia and industry, nurturing a startup ecosystem that drives economic and social impact.
                </p>
              </CardContent>
            </Card>
          </RevealAnimation>
          
          <RevealAnimation delay={700}>
            <Card className="bg-background/95 dark:bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-secondary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 4h.01" />
                      <path d="M20 12h.01" />
                      <path d="M12 20h.01" />
                      <path d="M4 12h.01" />
                      <path d="M17.657 6.343h.01" />
                      <path d="M17.657 17.657h.01" />
                      <path d="M6.343 17.657h.01" />
                      <path d="M6.343 6.343h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-foreground">
                  To be a leading platform that cultivates entrepreneurial spirit, encourages disruptive innovations, and builds a network of change-makers who contribute to sustainable growth and technological advancement in society. We envision a future where every aspiring entrepreneur has the opportunity to bring their ideas to life and make a meaningful difference.
                </p>
              </CardContent>
            </Card>
          </RevealAnimation>

          {/* New Card for SCSIT */}
          <RevealAnimation delay={800}>
            <Card className="bg-background/95 dark:bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center gap-4">
                    <ImageWithFallback
                      src="/images/hod.jpeg"
                      alt="HOD SCSIT"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Our HOD Quote</h3>
                      <p className="text-sm text-muted-foreground">Dr. Ugrasen Suman</p>
                    </div>
                  </div>
                </div>
                <p className="text-foreground">
                  SCSIT, established in 1986, is a hub for cutting-edge tech education, offering M.Tech, M.Sc., MBA, PGDCA, and BCA programs tailored to industry needs. With a strong focus on research, innovation, and entrepreneurship, the school provides state-of-the-art labs, ICT-enabled infrastructure, and collaborations with top organizations like DRDO, ISRO, and C-DAC. Students gain hands-on experience through projects, internships, and real-world problem-solving, fostering technical expertise and leadership. Supported by various student development initiatives and backed by experienced faculty, SCSIT is committed to shaping future-ready IT professionals equipped to drive technological advancements and entrepreneurship.
                </p>
              </CardContent>
            </Card>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

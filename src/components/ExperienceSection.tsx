import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, Calendar } from "lucide-react";
import { Experience } from "@/types/portfolio";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-gradient-primary -translate-x-1/2 ring-4 ring-background`} />

                {/* Content Card */}
                <div className={`bg-card rounded-2xl p-6 border border-border shadow-soft ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}>
                  {/* Header */}
                  <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="p-2.5 rounded-xl bg-gradient-primary/10 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <h3 className="font-bold text-lg">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Projects */}
                  <div className="space-y-3">
                    {exp.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className={`p-3 rounded-lg bg-secondary/50 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        <h4 className="font-semibold text-sm mb-1">{project.name}</h4>
                        <p className="text-xs text-muted-foreground">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

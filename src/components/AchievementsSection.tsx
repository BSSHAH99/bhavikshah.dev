import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Package, ShieldCheck, Users } from "lucide-react";
import { Achievement } from "@/types/portfolio";

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Package,
  ShieldCheck,
  Users,
};

export const AchievementsSection = ({ achievements }: AchievementsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Milestones and accomplishments in my career
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Rocket;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-6 border border-border card-hover text-center"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary/10 text-primary mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

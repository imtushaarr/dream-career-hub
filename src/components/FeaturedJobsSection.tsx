import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JobCard from '@/components/JobCard';
import JobDetailModal from '@/components/JobDetailModal';
import { jobs, Job } from '@/data/jobs';

const FeaturedJobsSection = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <section className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-primary font-semibold mb-3 animate-fade-up">
              FEATURED OPPORTUNITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-up stagger-1">
              Latest <span className="gradient-text">Job Openings</span>
            </h2>
          </div>
          <Button variant="glass" className="animate-fade-up stagger-2">
            View All Jobs
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className={`animate-fade-up stagger-${Math.min(index + 1, 6)}`}
            >
              <JobCard job={job} onClick={() => setSelectedJob(job)} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg">
            Load More Jobs
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  );
};

export default FeaturedJobsSection;

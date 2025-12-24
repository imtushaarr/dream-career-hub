import { X, MapPin, DollarSign, Building2, Bookmark, Share2, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Job } from '@/data/jobs';

interface JobDetailModalProps {
  job: Job;
  onClose: () => void;
}

const JobDetailModal = ({ job, onClose }: JobDetailModalProps) => {
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'Remote':
        return 'remote';
      case 'Full-time':
        return 'fulltime';
      case 'Part-time':
        return 'parttime';
      default:
        return 'glass';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-card/50 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-8 pb-6 border-b border-border/50">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xl font-bold gradient-text">
              {job.companyLogo}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                {job.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{job.posted}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Badge variant={getBadgeVariant(job.type)} className="px-4 py-1.5">
              {job.type}
            </Badge>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <DollarSign className="w-5 h-5 text-primary" />
              <span>{job.salary}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About This Role</h3>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              {job.responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Requirements</h3>
            <ul className="space-y-3">
              {job.requirements.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-foreground font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Benefits & Perks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {job.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 p-3 rounded-xl bg-card/50"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 p-6 border-t border-border/50 bg-card/90 backdrop-blur-xl rounded-b-3xl">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="glow" size="xl" className="flex-1">
              Apply Now
            </Button>
            <div className="flex gap-3">
              <Button variant="glass" size="xl">
                <Bookmark className="w-5 h-5" />
                Save
              </Button>
              <Button variant="glass" size="xl">
                <Share2 className="w-5 h-5" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailModal;

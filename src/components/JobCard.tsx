import { MapPin, Clock, DollarSign, Building2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Job } from '@/data/jobs';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const JobCard = ({ job, onClick }: JobCardProps) => {
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
    <div
      onClick={onClick}
      className="group glass rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 gradient-border"
    >
      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-lg font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
          {job.companyLogo}
        </div>

        <div className="flex-1 min-w-0">
          {/* Job Title */}
          <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors truncate">
            {job.title}
          </h3>

          {/* Company */}
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <Building2 className="w-4 h-4" />
            <span className="text-sm">{job.company}</span>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <Badge variant={getBadgeVariant(job.type)}>{job.type}</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{job.posted}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Preview */}
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-1 rounded-md bg-card/80 text-muted-foreground"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 4 && (
            <span className="text-xs px-2 py-1 text-primary">
              +{job.skills.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;

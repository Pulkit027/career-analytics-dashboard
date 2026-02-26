import React from 'react';
import Card from '../common/Card';
import { Code2, TrendingUp } from 'lucide-react';

const SkillCard = ({ skill }) => {
  const getProgressColor = (level) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-blue-500';
    if (level >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card hover>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Code2 className="text-blue-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{skill.name}</h3>
            <p className="text-sm text-gray-600">{skill.category}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-green-600">
          <TrendingUp size={16} />
          <span className="text-sm font-medium">{skill.level}%</span>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(skill.level)}`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>

        <div className="flex justify-between text-sm pt-2 border-t border-gray-100">
          <div>
            <p className="text-gray-600">Projects</p>
            <p className="font-semibold text-gray-900">{skill.projects}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Last Practiced</p>
            <p className="font-semibold text-gray-900">
              {new Date(skill.lastPracticed).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SkillCard;

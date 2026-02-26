import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import SkillCard from '../components/skills/SkillCard';
import Button from '../components/common/Button';
import { mockSkills } from '../data/mockData.js';

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', ...new Set(mockSkills.map((skill) => skill.category))];

  const filteredSkills = mockSkills.filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || skill.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const averageProgress = Math.round(
    filteredSkills.reduce((acc, skill) => acc + skill.level, 0) / filteredSkills.length
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Skills</h1>
          <p className="text-gray-600 mt-1">Track your technical skills and progress</p>
        </div>
        <Button variant="primary" className="flex items-center gap-2">
          <Plus size={20} />
          Add Skill
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <p className="text-blue-100 text-sm">Total Skills</p>
          <p className="text-3xl font-bold mt-1">{filteredSkills.length}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <p className="text-green-100 text-sm">Average Progress</p>
          <p className="text-3xl font-bold mt-1">{averageProgress}%</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <p className="text-purple-100 text-sm">Total Projects</p>
          <p className="text-3xl font-bold mt-1">
            {filteredSkills.reduce((acc, skill) => acc + skill.projects, 0)}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No skills found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Skills;

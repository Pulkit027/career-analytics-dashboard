import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, Github, Linkedin, Save } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { mockUser } from '../data/mockData.js';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(mockUser);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-1">Manage your personal information</p>
        </div>
        <Button
          variant={isEditing ? 'success' : 'primary'}
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="flex items-center gap-2"
        >
          {isEditing ? (
            <>
              <Save size={20} />
              Save Changes
            </>
          ) : (
            'Edit Profile'
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              {isEditing && (
                <button className="absolute bottom-4 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <User size={16} />
                </button>
              )}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
            <p className="text-gray-600 mt-1">{profile.major}</p>
            <p className="text-sm text-gray-500 mt-1">{profile.university}</p>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <GraduationCap size={18} />
                  <span>Class of {profile.graduationYear}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <span className="font-semibold">GPA:</span>
                  <span>{profile.gpa}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User size={18} />
                Full Name
              </label>
              {isEditing ? (
                <Input name="name" value={profile.name} onChange={handleChange} />
              ) : (
                <p className="text-gray-900">{profile.name}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Mail size={18} />
                Email
              </label>
              {isEditing ? (
                <Input type="email" name="email" value={profile.email} onChange={handleChange} />
              ) : (
                <p className="text-gray-900">{profile.email}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Phone size={18} />
                Phone
              </label>
              {isEditing ? (
                <Input type="tel" name="phone" value={profile.phone} onChange={handleChange} />
              ) : (
                <p className="text-gray-900">{profile.phone}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <MapPin size={18} />
                Location
              </label>
              {isEditing ? (
                <Input name="location" value={profile.location} onChange={handleChange} />
              ) : (
                <p className="text-gray-900">{profile.location}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <GraduationCap size={18} />
                University
              </label>
              {isEditing ? (
                <Input name="university" value={profile.university} onChange={handleChange} />
              ) : (
                <p className="text-gray-900">{profile.university}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <GraduationCap size={18} />
                Major
              </label>
              {isEditing ? (
                <Input name="major" value={profile.major} onChange={handleChange} />
              ) : (
                <p className="text-gray-900">{profile.major}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Linkedin size={18} />
                LinkedIn
              </label>
              {isEditing ? (
                <Input name="linkedin" value={profile.linkedin} onChange={handleChange} />
              ) : (
                <p className="text-gray-900">{profile.linkedin}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Github size={18} />
                GitHub
              </label>
              {isEditing ? (
                <Input name="github" value={profile.github} onChange={handleChange} />
              ) : (
                <p className="text-gray-900">{profile.github}</p>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;




import React, { useState } from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LaptopIcon from '@mui/icons-material/Laptop';
import BackupIcon from '@mui/icons-material/Backup';
import TransformIcon from '@mui/icons-material/Transform';
import TextsmsIcon from '@mui/icons-material/Textsms';

const tabs = [
  {
    id: 1,
    label: 'Interface',
    icon: <LaptopIcon />,
    content: 'The interface of our platform is designed to be user-friendly and efficient, ensuring a seamless experience.',
  },
  {
    id: 2,
    label: 'Security',
    icon: <SecurityIcon />,
    content:
      'Our system prioritizes data security with features like encryption, role-based access, and regular backups.',
  },
  {
    id: 3,
    label: 'Support',
    icon: <SupportAgentIcon />,
    content:
      'We offer 24/7 customer support to assist you with any issues or questions you may have.',
  },
  {
    id: 4,
    label: 'Accessibility',
    icon: <AccessibilityNewIcon />,
    content:
      'Accessibility is a key focus, ensuring that our platform is usable by everyone, regardless of ability.',
  },
  {
    id: 5,
    label: 'Migrations',
    icon: <TransformIcon />,
    content:
      'Accessibility is a key focus, ensuring that our platform is usable by everyone, regardless of ability.',
  },
  {
    id: 6,
    label: 'Communications',
    icon: <TextsmsIcon />,
    content:
      'Accessibility is a key focus, ensuring that our platform is usable by everyone, regardless of ability.',
  },
  {
    id: 7,
    label: 'Paperless',
    icon: <BackupIcon />,
    content:
      'Our paperless system allows you to digitize processes, reducing waste and improving efficiency.',
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container mx-auto bg-white px-4 py-10 md:px-16 lg:px-32">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold text-blue-700">WHY EDUNEXT</h2>
        <h1 className="text-3xl font-bold text-gray-900">
        Why Edunext School Management Software?
        </h1>
        <p className="text-gray-600 mt-4">
        Edunext ERP has many salient features that a school requires for the smooth functioning of day-to-day tasks. This Most advanced
        School ERP allows schools to go paperless and to have control over each and every report with just a click.
        There are several reasons to have Edunext ERP, a few of which are mentioned below.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 overflow-auto bg-white rounded-lg shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center p-4 w-24 md:w-32 rounded-lg transition-all ${
              activeTab === tab.id
                ? 'bg-blue-100 text-blue-700'
                : ' text-gray-600 '
            }`}
          >
            <span className="text-3xl mb-2">{tab.icon}</span>
            <span className="text-sm font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="text-center">

                <div>
                <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tab.label}</h3>
                <p className="text-gray-600">{tab.content}</p>
                </div>
               
               <div>
                    

                </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Features;

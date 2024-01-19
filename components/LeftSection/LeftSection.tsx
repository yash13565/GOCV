'use client';
import Input from '@/components/Atoms/Input/Input';
import RightSection from '@/components/RightSection/RightSection';
import React, { useState } from 'react';
type myData = {
  heading: string;
  designation: string;
  project: string;
  projectDetails: string;
  date: string;
}[]
type skillData = {
skills: string;
}[]
export default function LeftSection() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [heading, setHeading] = useState('');
  const [designation, setDesignation] = useState('');
  const [project, setProject] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState<myData>([]);
  const [skills, setSkills] = useState<skillData>([]);
  const [skillsDetails, setSkillsDetails] = useState('')
  function handleAddData() {
    setData([
      ...data,
      {
        heading: heading,
        designation: designation,
        project: project,
        projectDetails: projectDetails,
        date,
      },
    ]);
  }
  function addSkills() {
    setSkills([...skills, {
      skills:skillsDetails
    }])
  }
  function handleChange(identifier: string, value: string) {
    if (identifier === 'phone') {
      setPhone(value);
    } else if (identifier === 'name') {
      setName(value);
    } else if (identifier === 'email') {
      setEmail(value);
    } else if (identifier === 'address') {
      setAddress(value);
    } else if (identifier === 'title') {
      setTitle(value);
    } else if (identifier === 'about') {
      setAbout(value);
    }else if (identifier === 'heading') {
      setHeading(value);
    }else if (identifier === 'designation') {
      setDesignation(value);
    }else if (identifier === 'project') {
      setProject(value);
    }else if (identifier === 'projectDetails') {
      setProjectDetails(value);
    }else if (identifier === 'date') {
      setDate(value);
    }else if (identifier === 'skillsDetails') {
      setSkillsDetails(value);
    }
  }

  return (
    <div className='flex'>
      <div>
      <h1 className='m-10 sm:m-20 font-bold text-2xl'>Add Given Fields</h1>
      <div className='bg-[#022b3a] ml-10 sm:ml-20 w-[54%] md:w-[48%] p-3 rounded-md text-white font-semibold'>
        <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
          <div>
            <p>Phone No</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('phone', e.target.value)
              }
              placeholder='phoneno'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={phone}
            />
          </div>
          <div className='mt-2'>
            <p>Email</p>
            <Input
              type='email'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('email', e.target.value)
              }
              placeholder='email'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={email}
            />
          </div>
          <div className='mt-2'>
            <p>Address</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('address', e.target.value)
              }
              placeholder='address'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={address}
            />
          </div>
        </div>
        <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
          <div className='mt-2'>
            <p>Name</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('name', e.target.value)
              }
              placeholder='name'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={name}
            />
          </div>
          <div>
            <p>Title</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('title', e.target.value)
              }
              placeholder='title'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={title}
            />
          </div>
          <div>
            <p>About</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('about', e.target.value)
              }
              placeholder='about yourself'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={about}
            />
          </div>
        </div>
        <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
          <div className='mt-2'>
            <p>Heading</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('heading', e.target.value)
              }
              placeholder='heading'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={heading}
            />
          </div>
          <div>
            <p>Designation</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('designation', e.target.value)
              }
              placeholder='designation'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={designation}
            />
          </div>
          <div>
            <p>Project</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('project', e.target.value)
              }
              placeholder='project'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={project}
            />
          </div>
        </div>
        <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
          <div className='mt-2'>
            <p>Project Details</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('projectDetails', e.target.value)
              }
              placeholder='project details'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={projectDetails}
            />
          </div>
          <div>
            <p>Date</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('date', e.target.value)
              }
              placeholder='date'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={date}
            />
          </div>
        </div>
        <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
        <div>
            <p>Skills</p>
            <Input
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('skillsDetails', e.target.value)
              }
              placeholder='add skills'
              className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
              value={skillsDetails}
            />
          </div>
        </div>
      </div>
        </div>
        <RightSection />
    </div>
  );
}

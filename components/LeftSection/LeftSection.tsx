'use client';
import Button from '@/components/Atoms/Button/Button';
import Input from '@/components/Atoms/Input/Input';
import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
type myData = {
  designation: string;
  project: string;
  projectDetails: string;
  date: string;
}[];
type skillData = {
  skills: string;
}[];
type hobbyData = {
  hobby: string;
}[];
type educationData = {
  university: string;
  grade: string;
  graduationDate: string;
}[];
export default function LeftSection() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [designation, setDesignation] = useState('');
  const [project, setProject] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState<myData>([]);
  const [skills, setSkills] = useState<skillData>([]);
  const [skillsDetails, setSkillsDetails] = useState('');
  const [hobby, setHobby] = useState<hobbyData>([]);
  const [hobbyDetails, setHobbyDetails] = useState('');
  const [university, setUniversity] = useState('');
  const [grade, setGrade] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [educationData, setEducationData] = useState<educationData>([]);
  function handleAddData() {
    setData([
      ...data,
      {
        designation: designation,
        project: project,
        projectDetails: projectDetails,
        date,
      },
    ]);
  }
  function addEducationData() {
    setEducationData([
      ...educationData,
      {
        university: university,
        grade: grade,
        graduationDate: graduationDate,
      },
    ]);
  }
  function addSkills() {
    setSkills([
      ...skills,
      {
        skills: skillsDetails,
      },
    ]);
    setSkillsDetails('');
  }
  function addHobby() {
    setHobby([
      ...hobby,
      {
        hobby: hobbyDetails,
      },
    ]);
    setHobbyDetails('');
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
    } else if (identifier === 'designation') {
      setDesignation(value);
    } else if (identifier === 'project') {
      setProject(value);
    } else if (identifier === 'projectDetails') {
      setProjectDetails(value);
    } else if (identifier === 'date') {
      setDate(value);
    } else if (identifier === 'skillsDetails') {
      setSkillsDetails(value);
    } else if (identifier === 'hobby') {
      setHobbyDetails(value);
    } else if (identifier === 'university') {
      setUniversity(value);
    } else if (identifier === 'grade') {
      setGrade(value);
    } else if (identifier === 'graduationDate') {
      setGraduationDate(value);
    }
  }
  function downloadResume() {
    const resumeContainer = document.getElementById('resume-container');

    if (resumeContainer) {
      const pdfOptions = {
        margin: 4,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      html2pdf().from(resumeContainer).set(pdfOptions).save();
    }
  }
  return (
    <div className='flex-col md:flex-row md:flex'>
      <div>
        <h1 className='m-10 sm:m-20 font-bold text-2xl'>Add Given Fields</h1>
        <div className='bg-[#022b3a] ml-10 sm:ml-20 w-[54%] md:w-[80%] p-3 rounded-md text-white font-semibold'>
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
          <div className='p-5 flex-col sm:flex sm:flex-row gap-5'>
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
            <div className='mt-2'>
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
            <Button
              type='button'
              text='Add Experience'
              onClick={handleAddData}
              className=' bg-black  rounded-md h-12 mt-10'
            />
          </div>
          <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
            <div>
              <p>University</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('university', e.target.value)
                }
                placeholder='university'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={university}
              />
            </div>
            <div>
              <p>Grade</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('grade', e.target.value)
                }
                placeholder='grade'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={grade}
              />
            </div>
          </div>
          <div className='p-5 flex-col sm:flex sm:flex-row gap-5'>
            <div className='mt-2'>
              <p>Date</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('graduationDate', e.target.value)
                }
                placeholder='graduationDate'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={graduationDate}
              />
            </div>
            <Button
              type='button'
              text='Add Education'
              onClick={addEducationData}
              className=' bg-black  rounded-md h-12 mt-10 p-2'
            />
          </div>
          <div className='p-5 flex-col  sm:flex sm:flex-row gap-5'>
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
            <Button
              type='button'
              text='AddSkills'
              onClick={addSkills}
              className=' bg-black p-3 rounded-md h-10 mt-9'
            />
          </div>
          <div className='p-5 flex-col  sm:flex sm:flex-row gap-5'>
            <div>
              <p>Hobby</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('hobby', e.target.value)
                }
                placeholder='add hobby'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={hobbyDetails}
              />
            </div>
            <Button
              type='button'
              text='Add Hobby'
              onClick={addHobby}
              className=' bg-black p-3 rounded-md h-10 mt-9'
            />
          </div>
        </div>
      </div>
      {/* Resume Template goes here */}
      <div
        id='resume-container'
        className='shadow-md bg-[#ffffff] w-[700px] mt-20 rounded-md max-h-[91vh]'
      >
        <div className='flex justify-between ml-[1rem] font-semibold text-sm'>
          <h1>Phone: {phone.length === 0 ? '0000000000' : phone}</h1>
          <h1>Email: {email.length === 0 ? 'dummy@gmail.com' : email}</h1>
          <h1 className='w-[40%]'>
            Address:{' '}
            {address.length === 0
              ? 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa cupiditate possimus'
              : address}
          </h1>
        </div>
        <div className='bg-[#ffffff] shadow-md mt-2 rounded-xl'>
          <div className='flex flex-col items-center mt-8 text-left'>
            <p className='font-extrabold text-[#c0d6df] text-[1.5rem]'>
              {name.length === 0 ? 'Luke Ronchi' : name}
            </p>
            <p className='font-bold text-[#c0d6df] text-[1rem]'>
              {title.length === 0 ? 'UI/UX DESIGNER' : title}
            </p>
          </div>
          <div className='mt-12 bg-amber-100 text-left p-2 min-h-[75px]'>
            <p className=' ml-40 text-sm'>
              {about.length === 0
                ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia in, voluptatem, commodi velit eius aperiam fugiat, magni earum tenetur optio labore ad explicabo deleniti perspiciatis ut eaque nam veritatis'
                : about}
            </p>
          </div>
          <div className='flex gap-8'>
            <div className='bg-[#d8d8d8] p-6 w-[40%]'>
              <h1 className='font-extrabold text-sky-950'>MY SKILLS</h1>
              {skills?.map((skill, index) => (
                <p className='p-1'>{skill.skills}</p>
              ))}
              <p className='mt-10 text-sky-950 font-bold'>HOBBIES</p>
              <div className='flex gap-4  flex-wrap '>
                {hobby?.map((hobbies, index) => (
                  <p key={index} className='p-1'>
                    {hobbies.hobby}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h1 className='font-bold text-yellow-300 text-2xl'>Experience</h1>
              {data?.map((val, ind) => (
                <div key={ind} className='flex justify-between pb-5'>
                  <div>
                    <p className='font-bold text-xl'>{val?.designation}</p>
                    <p className='font-bold text-sm'>{val?.project}</p>
                    <p className='w-60 text-gray-500 text-xs'>
                      {val?.projectDetails}
                    </p>
                  </div>
                  <div className='max-h-[35px] p-[10px] bg-amber-400 rounded-tl-[290px]'>
                    <p className='text-sm'>{val?.date}</p>
                  </div>
                </div>
              ))}
              <div className='border-t border-dotted border-gray-500 my-20 w-[27rem]'></div>
              <h1 className='font-bold text-yellow-300 text-2xl mt-[5rem]'>
                Education
              </h1>
              {educationData?.map((val, ind) => (
                <div key={ind} className='flex justify-between pb-5'>
                  <div>
                    <p className='font-bold text-xl'>{val?.university}</p>
                    <p className='font-bold text-sm'>{val?.grade}</p>
                  </div>
                  <div className='max-h-[35px] p-[10px] bg-amber-400 rounded-tl-[290px]'>
                    <p className='text-sm'>{val?.graduationDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button
          type='button'
          text='Download Resume'
          onClick={downloadResume}
          className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'
        />
      </div>
    </div>
  );
}

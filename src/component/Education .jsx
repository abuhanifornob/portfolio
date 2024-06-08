const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Asian University of Bangladesh",
      duration: "2019 - 2022",
    },
  ];

  const courses = [
    {
      title: "Advance Full Stack Web Development",
      platform: "Programing Hero",
      duration: "Running",
      details:
        "Advance Full Stack Web developmet useing React, Node.js, and MongoDB. Typescript, Next js, Advance MongoDB, AWS,SQL Backend Braniac with Prisma",
    },
  ];
  return (
    <div id="education" className="text-center my-4 font-mono ">
      <h2 className="text-4xl font-bold text-center mb-8">
        EDUCATION AND COURSES
      </h2>
      <div
        className="p-8 flex flex-col md:flex-row justify-start items-start text-start gap-4"
        id="education"
      >
        <div className="w-full md:w-1/2  ">
          <h2 className="text-3xl font-bold text-start mb-4">Education</h2>
          <div className="bg-slate-800 p-3 shadow-lg rounded-lg text-white  hover:scale-105">
            {educationData.map((edu, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-3xl font-semibold mb-2">{edu.degree}</h3>
                <h4 className="text-2xl font-medium mb-2">
                  <span className="text-2xl font-bold">Institution: </span>
                  {edu.institution}
                </h4>
                <p className="text-xl mb-2">
                  <span className="tex-2xl font-bold">Duration : </span>
                  {edu.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-start mb-4">Courses</h2>
          <div className="bg-slate-800 p-3 shadow-lg rounded-lg text-white hover:scale-105">
            {courses.map((course, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-3xl font-semibold mb-2">{course.title}</h3>
                <h4 className="text-2xl font-medium mb-2">
                  <span className="text-2xl font-bold">Platform: </span>
                  {course.platform}
                </h4>
                <p className="text-xl mb-2">
                  <span className="text-2xl font-bold">Durarion: </span>
                  {course.duration}
                </p>
                <p className="text-lg">
                  <span className="text-2xl font-bold">Topics: </span>
                  {course.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

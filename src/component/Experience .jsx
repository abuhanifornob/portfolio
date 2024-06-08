const Experience = () => {
  return (
    <div id="experience" className="text-center my-4">
      <h2 className="text-4xl font-bold text-center mb-8">WORK EXPERIENCE</h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical font-mono">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic text-2xl">2022 To Present</time>
            <div className="text-2xl font-black">IT Exicutve</div>
            <div className="text-3xl font-black">MONDOL GROUP</div>
            <p className="text-justify text-xl">
              1.Design, implement, and maintain local and wide area networks
              (LAN/WAN),
              <br />
              2.Install and configure security camera systems, including IP
              cameras. <br />
              3.Deliver technical support for desktop and laptop computers,
              including hardware diagnostics, repairs, and upgrades. <br />
              4.Install, configure, and maintain a variety of software
              applications. <br />
              5.Diagnose and resolve hardware and software issues efficiently.{" "}
              <br />
              6.Documentation and Reporting
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 text-start font-mono">
            <time className="font-mono italic text-2xl">2019-2021</time>
            <div className="text-2xl font-black">MIS Exicutive</div>
            <div className="text-3xl font-black">MONDOL GROUP</div>
            <p className="text-justify text-xl">
              1.ERP Softwear Maintain. <br /> 2.IT Support <br /> 3.Presentain
              Ready for Montly Closing
            </p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Experience;

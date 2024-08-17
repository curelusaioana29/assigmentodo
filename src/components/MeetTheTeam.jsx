// MeetTheTeam.js
import React from 'react';

const teamMembers = [
  {
    name: 'Ryan Wilson',
    position: 'Director of Production',
    image: 'images/team-11-420x424.jpg',
    link: '#'
  },
  {
    name: 'Jill Peterson',
    position: 'UI Designer',
    image: 'images/team-12-420x424.jpg',
    link: '#',
    delay: '.1s'
  },
  {
    name: 'Sam Robinson',
    position: 'Senior Developer',
    image: 'images/team-13-420x424.jpg',
    link: '#',
    delay: '.2s'
  },
  {
    name: 'Mary Lee',
    position: 'Software Developer',
    image: 'images/team-14-420x424.jpg',
    link: '#',
    delay: '.3s'
  }
];

const MeetTheTeam = () => (
  <section className="section section-sm section-fluid bg-default" id="team">
    <div className="container-fluid">
      <h2>Meet The Team</h2>
      <div className="row row-sm row-30 justify-content-center">
        {teamMembers.map((member, index) => (
          <div
            className={`col-md-6 col-lg-5 col-xl-3 wow fadeInRight`}
            data-wow-delay={member.delay || '0s'}
            key={index}
          >
            <article className="team-classic team-classic-lg">
              <a className="team-classic-figure" href={member.link}>
                <img
                  src={member.image}
                  alt={member.name}
                  width="420"
                  height="424"
                />
              </a>
              <div className="team-classic-caption">
                <h4 className="team-classic-name">
                  <a href={member.link}>{member.name}</a>
                </h4>
                <p className="team-classic-status">{member.position}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MeetTheTeam;

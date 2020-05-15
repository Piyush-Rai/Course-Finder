import React from 'react';
import { Divider, Row, Col, Icon } from 'antd';

import '../styles/About.css';

class About extends React.Component {
	render() {
		return (
			<div className="about-page">
				<h1>About Us</h1>
				<Divider className="divider" />
				<p className="about-content">
					Recently the number of online educational sites have grown in huge numbers and so did
					their content. While each one of them claim to provide the best content it is difficult or
					rather tedious for someone to compare the courses of a specific topic offered by each one
					of them and choose the best for themselves. Course Finder does all the tedious job and
					brings all the significant details about online courses/tutorials offered by various
					educational sites at a single platform and all one has to do is choose the most suitable
					one for himself/herself and enjoy learning. Course Finder is a solution that provides
					the best take off for a better career journey by assembling courses from various websites
					all at one place, so that you don't have to visit each one.
				</p>
				<div className="members">
					<h1>Developer</h1>
					<Divider className="divider" />
					<Row type="flex"  justify="center">
						<Col xs={24} md={8} lg={4} className="member">
							<div className="member-name">PIYUSH RAI</div>
							<div className="member-social">
								<span>
									<a
										href="https://github.com/Piyush-Rai"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Icon
											type="github"
											theme="outlined"
											className="about-social-icon github-icon"
										/>
									</a>
								</span>
							</div>
						</Col>
						
					</Row>
				</div>
			</div>
		);
	}
}

export default About;

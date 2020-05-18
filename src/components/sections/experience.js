import React from "react";
import styled from "styled-components";

import { jobs } from "../../config";

const StyledJobList = styled.div``;

const StyledJobEntry = styled.div``;

const StyledJobTitle = styled.h3``;

const StyledCompanyLink = styled.span``;

const StyledJobDates = styled.h4``;

const StyledRespList = styled.ul`
    list-style-type: none;
    line-height: 150%;
    padding-left: 0;

    margin-top: 0;

    &:before {
        content: attr(aria-label);
        font-weight: bold;
    }

    li:before {
        content: "‣ ";
        font-size: 18px;
        color: red;
    }
`;

const Experience = () => {
    console.log(jobs);

    return (
        <div>
            <h2>My Experience</h2>
            <StyledJobList>
                {jobs.map((job) => {
                    const { name, role, link, startDate, endDate, responsibilities } = job;

                    return (
                        <StyledJobEntry>
                            <StyledJobTitle>
                                <span>{role}</span>
                                <StyledCompanyLink>
                                    {" @"}
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        {name}
                                    </a>
                                </StyledCompanyLink>
                            </StyledJobTitle>
                            <StyledJobDates>{`${startDate} - ${endDate}`}</StyledJobDates>
                            <StyledRespList>
                                {/* We have to go deeper! */}
                                {responsibilities.map((entry) => {
                                    return <li>{entry}</li>;
                                })}
                            </StyledRespList>
                        </StyledJobEntry>
                    );
                })}
            </StyledJobList>
        </div>
    );
};

export default Experience;

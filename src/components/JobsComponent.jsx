import React, { useState } from "react";
import "../Sass/ConnectionsComponent.scss";
import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { toast } from "react-toastify";

const jobobj = [
  {
    id: 1,
    postion: "Frontend Developer",
    company: "Google",
    req: "Javascript, Reactjs",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut eaque laboriosam nemo, quasi distinctio.",
  },
  {
    id: 2,
    postion: "Backend Developer",
    company: "Google",
    req: "Javascript, Reactjs",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut eaque laboriosam nemo, quasi distinctio.",
  },
  {
    id: 3,
    postion: "BlockChain Developer",
    company: "Google",
    req: "Javascript, Reactjs",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut eaque laboriosam nemo, quasi distinctio.",
  },
  {
    id: 4,
    postion: "Devops Developer",
    company: "Google",
    req: "Javascript, Reactjs",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut eaque laboriosam nemo, quasi distinctio.",
  },
  {
    id: 5,
    postion: "Azure Developer",
    company: "Google",
    req: "Javascript, Reactjs",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut eaque laboriosam nemo, quasi distinctio.",
  },
];

export default function JobsComponent() {
  const [jobs, setJobs] = useState(jobobj);

  const handleApply = (jobselect) => {
    setJobs(jobs.filter((job) => job.id !== jobselect.id));
    toast.success(`Applied for ${jobselect.postion}`);
  };

  return (
    <Stack p="40px" align="center" color="#4A5568">
      <VStack bg="white" w="70%" borderRadius="10px" p="30px" gap="15px">
        <Heading color="green">Land your new jobs Through Step-one</Heading>
        {jobs.map((job) => {
          return (
            <Stack
              alignItems="flex-start"
              border="1px solid black"
              w="90%"
              p="8px"
              borderRadius="10px"
              gap="1px"
              bg="#E2E8F0"
            >
              <Heading m="4px">{job.postion}</Heading>
              <Text m="4px" w="100%">
                <span>
                  <b>Company</b> : {job.company}
                </span>{" "}
                <span style={{ marginLeft: "20px" }}>
                  <b>Location</b> : Mumbai
                </span>
              </Text>
              <Text m="4px">
                <b>Requirement</b> : {job.req}
              </Text>
              <Text m="4px">
                <b>Description</b> : {job.des}
              </Text>
              <Button
                alignSelf="center"
                m="10px"
                w="40%"
                bg="green"
                p="10px 20px"
                borderRadius="6px"
                border="none"
                color="white"
                onClick={() => handleApply(job)}
              >
                Apply
              </Button>
            </Stack>
          );
        })}
      </VStack>
    </Stack>
  );
}

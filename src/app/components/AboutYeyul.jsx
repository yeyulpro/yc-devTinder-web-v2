import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const technicalSkills = [
  "C#",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "React",
  "Redux Toolkit",
  "RTK Query",
  "React Query",
  "React Hook Form",
  "Zod",
  "ASP.NET Core",
  "Express",
  "HTML/CSS",
  "MUI",
  "Leaflet",
  "WebSocket",
];

const projects = [
  {
    name: "ReHub – Real Estate Community App",
    role: "Developer",
    period: "May 2025 – Oct 2025",
    description:
      "Developed full-stack app using React, Vite, TypeScript, MUI, React Query, Leaflet, ASP.NET Core Web API, CQRS + Mediator, Entity Framework Core. Integrated SignalR for real-time interactions and deployed on Azure.",
  },
  {
    name: "YC-Store – E-Commerce Web Application",
    role: "Developer",
    period: "Jan 2025 – Apr 2025",
    description:
      "Built full-stack e-commerce platform with React + TypeScript frontend, ASP.NET Core Web API backend, Redux Toolkit with RTK Query, Material UI, Stripe payments, deployed on Azure.",
  },
  {
    name: "YC-Tinder | MERN Stack Social Match Application",
    role: "Developer",
    period: "Jan 2025 – Apr 2025",
    description:
      "Built MERN stack app with real-time chat using Socket.io, JWT authentication, deployed on AWS EC2.",
  },
];
const sublines = [
  { title: "yeyulchoi2@gmail.com", linkTo: "mailto:yeyulchoi2@gmail.com" },
  { title: "1-647-995-1483", linkTo: "" },
  { title: "Toronto, ON", linkTo: "" },
  { title: "LinkedIn", linkTo: "https://www.linkedin.com/in/yeyul-choi/" },
  { title: "Github", linkTo: "https://github.com/yeyulpro" },
];

export default function AboutYeyul() {
  return (
    <Box sx={{ p: 4, bgcolor: "#14213d", borderRadius: 6, mb: 3 }}>
      <Paper
        sx={{ p: 4, maxWidth: 900, margin: "0 auto", borderRadius: 3 }}
        elevation={7}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              YEYUL CHOI
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              {sublines.map((item, index) => (
                <Typography key={index}>
                  <a href={item.linkTo}>| {item.title}</a>
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" fontWeight="bold">
          OBJECTIVE
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Results-driven Software Engineering graduate seeking a Junior Software
          Developer role. Experienced in building scalable full-stack web
          applications using C# ASP.NET Core Web API, React Query, Redux
          Toolkit, and the MERN stack. Skilled in cloud deployment (Azure, AWS)
          and CI/CD automation.
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" fontWeight="bold">
          TECHNICAL SKILLS
        </Typography>
        <Grid container spacing={1} sx={{ mb: 2 }}>
          {technicalSkills.map((skill) => (
            <Grid key={skill}>
              <Chip label={skill} color="primary" variant="outlined" />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" fontWeight="bold">
          PROJECTS
        </Typography>
        {projects.map((proj) => (
          <Box key={proj.name} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {proj.name}
            </Typography>
            <Typography variant="subtitle2">
              {proj.role} | {proj.period}
            </Typography>
            <Typography variant="body2">{proj.description}</Typography>
          </Box>
        ))}
        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" fontWeight="bold">
          EDUCATION
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Centennial College, Scarborough, ON — Advanced Diploma in Software
          Engineering Technology (Expected Dec 2025)
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" fontWeight="bold">
          CERTIFICATIONS
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          - AWS Certified Solutions Architect – Associate
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          - Foundational C# with Microsoft Developer Certification
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          - Crash Course on Python (Google)
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {/* Professional Experience */}
        <Typography variant="h6" fontWeight="bold">
          PROFESSIONAL EXPERIENCE
        </Typography>
        <Typography variant="body2">
          A G Professional Corporation | Vaughan, ON — Law Clerk & Legal
          Assistant (March 2023 – Present)
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Conducted legal research, managed documentation, and delivered
          excellent client service.
        </Typography>
      </Paper>
    </Box>
  );
}

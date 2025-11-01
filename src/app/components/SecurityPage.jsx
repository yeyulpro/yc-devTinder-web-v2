import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function SecurityPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ overflowY: "auto", color: '#FFFF' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bolder', color: '#FBFFB1' }}>
          Security at YC-Tinder
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          A Secure and Trusted Place to Keep the Magic of Human Connection Alive!
        </Typography>
        <Typography paragraph>
          The Tinder Security team’s mission is to build the best security organization in the world,
          ensuring our members have a private and secure place to keep the magic of human connection alive.
        </Typography>
        <Typography paragraph>
          Because you entrust Tinder with your information, the security of our application and the privacy
          of your data is our top priority. Ensuring that we maintain a robust, transparent, and accountable
          security program is core to our commitment to you.
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          Internal Tinder Security Practices
        </Typography>
        <Typography paragraph>
          The security program at Tinder protects our organization and your data at every turn utilizing a
          combination of industry-leading security infrastructure, responsible data practices, as well as
          security and privacy best practices to stay ahead of the evolving number of threats facing
          internet services and infrastructure.
        </Typography>
        <Typography paragraph>
          Our security program is focused on the following domains:
        </Typography>

        <Typography variant="h6" gutterBottom>
          Internal Information Security Program
        </Typography>
        <Typography paragraph>
          We strive to increase security and reduce risk within Tinder's digital environment. We proactively
          build secure access protocols and network architecture to enable systematic control of internal
          access to Tinder’s facilities, systems, and resources, using the least privilege paradigm.
          Tinder enforces the use of two-factor authentication (2FA) internally.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Application / Infrastructure Security
        </Typography>
        <Typography paragraph>
          Security is engineered and integrated at all levels of our development lifecycle to help enable the
          creation of better, safer products, as well as to ensure secure design and engineering principles.
          Our applications and systems, including new features, code, and configuration changes pass through
          extensive security design reviews and assessments by our internal teams. Additionally, many of these
          applications and systems undergo routine independent and rigorous pen tests through reputable
          third-party security experts.
        </Typography>

        <Typography variant="h6" gutterBottom >
          Governance, Risk, and Compliance
        </Typography>
        <Typography paragraph>
          At Tinder, security awareness begins on day one and it is a continuous process thereafter. All
          employees undergo security and privacy training the moment they start as well as annually. Security
          is everyone’s responsibility at Tinder. We have implemented and enforced physical, operational,
          and technical controls, as well as enforced security policies and procedures to secure our systems
          and member data. In addition to performing extensive internal security risk assessments, we also
          perform in-depth reviews of the security posture of our third-party vendors.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Red Team / Offensive Security
        </Typography>
        <Typography paragraph>
          Our internal Red Team identifies previously unknown security vulnerabilities in existing systems
          and workflows through offensive security testing. This group simulates real-world attacks on all
          areas of the company and prioritizes upleveling security posture to address areas of greatest risk.
          Our goal is to gain insight into potential exposures, and to continuously test to reduce the likelihood
          of a breach.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Monitoring and Threat Management
        </Typography>
        <Typography paragraph>
          Access to our infrastructure and systems is continuously logged and monitored. Tinder's security
          monitoring, investigation, threat hunting, and response program ensures that we are alerted on as
          well as appropriately investigate, triage, and remediate security events.
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bolder' }}>
          Compliance Certifications, Standards, and Regulations
        </Typography>
        <Typography paragraph>
          Tinder is the first dating app to be recognized for its comprehensive information security and privacy
          practices in accordance with internationally accepted standards, achieving the ISO 27001:2022, ISO
          27017:2015 and ISO 27701:2019 certifications for our Information Security and Privacy Management System.
        </Typography>
        <Typography paragraph>
          We also undergo annual audits by independent firms to ensure our compliance with SOX and PCI-DSS
          security requirements.
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bolder' }}>
          Reporting Security Vulnerabilities
        </Typography>
        <Typography paragraph>
          Tinder welcomes input from the security research community in identifying potential issues and
          ways to improve the security of our applications, infrastructure, and member data. We encourage
          security researchers to responsibly disclose any potential vulnerabilities uncovered to our Bug
          Bounty program. We are committed to addressing security issues responsibly and in a timely manner.
          To protect our members, we request that you please refrain from sharing information about any potential
          vulnerabilities with anyone outside of Tinder until we have had the opportunity to review and address
          them with you. We appreciate your help in keeping Tinder secure for our members.
        </Typography>
        <Typography paragraph>
          For questions, concerns, or issues with your profile, or to report another member or profile, please
          visit{" "}
          <a href="https://www.help.tinder.com/" target="_blank" rel="noopener noreferrer">
            Tinder Support
          </a>{" "}
          to contact our Support team.
        </Typography>
      </Box>
    </Container>
  )
}
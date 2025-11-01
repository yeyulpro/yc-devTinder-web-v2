import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
export default function GuidelinesPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 , color:'#FFFF'}}>
      <Box sx={{ overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{fontWeight:'bolder' , color:'#FBFFB1'}}>
          Dating Safety Tips
        </Typography>
        <Typography paragraph>
          Meeting new people is exciting, but you should always be cautious when interacting with someone
          you don’t know. Use your best judgment and put your safety first, whether you are exchanging
          initial messages or meeting in person. While you can’t control the actions of others, there are
          things you can do to help you stay safe during your Tinder experience.
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          Online Safety
        </Typography>

        <Typography variant="h6" gutterBottom>
          Never Send Money or Share Financial Information
        </Typography>
        <Typography paragraph>
          Never send money, especially over wire transfer, even if the person claims to be in an emergency.
          Wiring money is like sending cash — it’s nearly impossible to reverse the transaction or trace
          where the money went. Never share information that could be used to access your financial accounts.
          If another user asks you for money, report it to us immediately.
        </Typography>
        <Typography paragraph>
          For tips on avoiding romance scams, check out advice from the U.S Federal Trade Commission on the{" "}
          <Link href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer">
            FTC website
          </Link>.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Protect Your Personal Information
        </Typography>
        <Typography paragraph>
          Never share personal information, such as your social security number, home or work address,
          or details about your daily routine (e.g., that you go to a certain gym every Monday) with people
          you don’t know. If you are a parent, limit the information that you share about your children on
          your profile and in early communications. Avoid sharing details such as your children’s names,
          where they go to school, or their ages or genders.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Stay on the Platform
        </Typography>
        <Typography paragraph>
          Keep conversations on the Tinder platform while you’re getting to know someone. Because exchanges
          on Tinder are subject to our Safe Message Filters, users with bad intentions often try to move the
          conversation to text, messaging apps, email, or phone right away.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Be Wary of Long Distance and Overseas Relationships
        </Typography>
        <Typography paragraph>
          Watch out for scammers who claim to be from your country but stuck somewhere else, especially
          if they ask for financial help to return home. Be wary of anyone who will not meet in person or
          talk on a phone/video call—they may not be who they say they are. If someone is avoiding your
          questions or pushing for a serious relationship without meeting or getting to know you first — that’s
          a red flag.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Report All Suspicious and Offensive Behavior
        </Typography>
        <Typography paragraph>
          You know when someone’s crossed the line and when they do, we want to know about it. Block and
          report anyone that violates our terms. Examples include:
        </Typography>
        <ul>
          <li>Requests for money or donations</li>
          <li>Underage users</li>
          <li>Harassment, threats, and offensive messages</li>
          <li>Inappropriate or harmful behavior during or after meeting in person</li>
          <li>Fraudulent profiles</li>
          <li>Spam or solicitation including links to commercial websites or attempts to sell products or services</li>
        </ul>
        <Typography paragraph>
          You can report any concerns about suspicious behavior from any profile page or messaging window.
          For more information, check out our Community Guidelines.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Protect Your Account
        </Typography>
        <Typography paragraph>
          Be sure to pick a strong password, and always be careful when logging into your account from a
          public or shared computer. Tinder will never send you an email asking for your username and
          password information — if you receive such an email, report it immediately.
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          Meeting in Person
        </Typography>
        <Typography variant="h6" gutterBottom>
          Don’t Be In A Rush
        </Typography>
        <Typography paragraph>
          Take your time and get to know the other person before agreeing to meet or chat off Tinder. Don’t
          be afraid to ask questions to screen for red flags. A phone or video call can be useful before meeting.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Meet in Public and Stay in Public
        </Typography>
        <Typography paragraph>
          Meet for the first few times in a populated, public place — never at your home, your date’s home,
          or any other private location. If your date pressures you to go to a private location, end the date.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Tell Friends and Family About Your Plans
        </Typography>
        <Typography paragraph>
          Tell a friend or family member of your plans, including when and where you’re going. Have your
          cell phone charged and with you at all times.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Be in Control of Your Transportation
        </Typography>
        <Typography paragraph>
          We want you to be in control of how you get to and from your date so that you can leave whenever
          you want. If you’re driving yourself, have a backup plan such as a ride-share app or a friend to
          pick you up.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Know Your Limits
        </Typography>
        <Typography paragraph>
          Be aware of the effects of drugs or alcohol on you — they can impair your judgment and alertness.
          If your date pressures you to use drugs or drink more than you’re comfortable with, hold your ground
          and end the date.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Don’t Leave Drinks or Personal Items Unattended
        </Typography>
        <Typography paragraph>
          Know where your drink comes from and where it is at all times — only accept drinks poured or served
          directly from the bartender or server. Keep your phone, purse, wallet, and anything containing personal
          information on you at all times.
        </Typography>

        <Typography variant="h6" gutterBottom>
          If You Feel Uncomfortable, Leave
        </Typography>
        <Typography paragraph>
          It’s okay to end the date early if you feel uncomfortable. If your instincts are telling you something
          is off, ask the bartender or server for help.
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          LGBTQ+ Travel
        </Typography>
        <Typography paragraph>
          Be careful while traveling. Research local laws and protections for LGBTQ+ individuals. If in unsafe
          territory, toggle off “Show me on Tinder” in settings. Visit{" "}
          <Link href="https://ilga.org/" target="_blank" rel="noopener noreferrer">
            ILGA World
          </Link>{" "}
          for latest laws and research.
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          Sexual Health & Consent
        </Typography>
        <Typography variant="h6" gutterBottom>
          Protect Yourself
        </Typography>
        <Typography paragraph>
          When used correctly and consistently, condoms can significantly reduce the risk of contracting
          and passing on STIs like HIV. Vaccinations can also reduce risks for certain STIs.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Know Your Status
        </Typography>
        <Typography paragraph>
          Not all STIs show symptoms. Get tested regularly to stay informed and prevent the spread of STIs.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Talk About It
        </Typography>
        <Typography paragraph>
          Communication is key: discuss sexual health and STI testing with partners before intimacy.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Consent
        </Typography>
        <Typography paragraph>
          All sexual activity must start with consent and include ongoing check-ins. Consent can be withdrawn
          at any time. Never proceed if your partner seems uncomfortable or is unable to consent due to drugs
          or alcohol. Learn more at{" "}
          <Link href="https://www.rainn.org/" target="_blank" rel="noopener noreferrer">
            RAINN
          </Link>.
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          Resources for Help, Support, or Advice
        </Typography>
        <Typography paragraph>
          Even if you follow these tips, no method is perfect. Report incidents to Tinder and consider
          reaching out to local support resources. If in immediate danger, call 911 (U.S. / Canada) or local law enforcement.
        </Typography>
        <ul>
          <li>
            <Link href="https://throughline.global/" target="_blank" rel="noopener noreferrer">
              ThroughLine
            </Link>{" "}
            – mental health and crisis support
          </li>
          <li>
            <Link href="https://www.rainn.org/" target="_blank" rel="noopener noreferrer">
              RAINN
            </Link>{" "}
            – sexual violence resources
          </li>
          <li>Crisis Text Hotline</li>
          <li>Black Emotional And Mental Health Collective</li>
        </ul>
      </Box>
    </Container>
  );
}

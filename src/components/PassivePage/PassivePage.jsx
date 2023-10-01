import React from "react";
import classes from "./styles.module.css";
import robot from "../img/integrationRobo.svg";
import ButtonGold from "../Button/ButtonGold";
import ButtonBlack from "../Button/ButtonBlack";
import robo from "../img/robo.svg";
import stake from "../img/staking.png";
import voting from "../img/voting.png";
import reward from "../img/reward.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PassivePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={classes.body}>
        <div data-aos="fade-up" data-aos-delay="300" className={classes.head}>
          EARN PASSIVE INCOME
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className={classes.header}>
          Train GURU AI to Earn
        </div>
        <div data-aos="fade-up" data-aos-delay="700" className={classes.para}>
          Join hands with TG-GPT Bot to train it's AI model on various topics of
          Web 3.0 and start earning passive income in $GPTG.
        </div>
        <div data-aos="fade" data-aos-delay="700">
          <img src={robot} alt="robot-img" height={500} />
        </div>
        <div className={classes.btns}>
          <ButtonGold>Try TG-GPT Bot</ButtonGold>
          <ButtonBlack>Whitepaper</ButtonBlack>
        </div>
      </div>
      <div className={classes.governancePage}>
        <div className={classes.page_left}>
          <img
            src={robo}
            className={classes.robo}
            height={400}
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <div className={classes.headsection}>
            <h2>Streamlined decision making</h2>
          </div>
          <div
            className={classes.header}
            data-aos="fade"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          >
            Your AI Governance Partner
          </div>
          <p
            className={classes.daigpara}
            data-aos="fade"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          >
            Daig's smart contracts will define the token properties and govern
            the platform's core functionalities, such as voting, staking, and
            rewards distribution
          </p>
        </div>
        <div className={classes.option_section}>
          <div
            className={classes.option_body}
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={voting} />
            <div>Voting</div>
          </div>
          <div
            className={classes.option_body}
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={stake} />
            <div>Staking</div>
          </div>
          <div
            className={classes.option_body}
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={reward} />
            <div>Reward Distribution</div>
          </div>
        </div>
      </div>
      <div className={classes.tokenomics}>
        <div
          className={classes.header}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
        >
          TOKENOMICS
        </div>
        <div
          className={classes.tokenpara}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
        >
          Art is a Therapy for artists which is why TG-GPT Bot provides freedom
          for creators to generate AI content and be able mint art as NFT into
          their wallet right away.
        </div>
        <div
          className={classes.tokenBox}
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
        >
          <div className={classes.contractHead}>Contract Address</div>
          <div className={classes.parakey}>
            0x994A258c7Dec633b5b15376f850D5Ea701179E79
          </div>
          <div className={classes.tokendata}>
            <div>
              <nav>Symbol</nav>
              <div>$DAIG</div>
            </div>

            <div>
              <nav>Decimal</nav>
              <div>14</div>
            </div>

            <div>
              <nav>Network</nav>
              <div>ETHEREUM ERC-20</div>
            </div>

            <div>
              <nav>Supply</nav>
              <div>9,000,00</div>
            </div>
          </div>
        </div>
        <div className={classes.taxData}>
          <div>
            <nav>5%</nav>
            <p>Buy Tax</p>
          </div>
          <div>
            <nav>5%</nav>
            <p>Sell Tax</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassivePage;

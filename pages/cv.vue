<template>
  <div class="container card m-10 h-full flex-1 bg-base-100/90 p-1 md:p-5">
    <p class="my-3 text-center text-2xl">Primary education</p>
    <p class="my-2 text-xl">
      Information Technologies, Bachelor's Degree (
      <a
        class="link"
        href="https://kubsau.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Kuban State Agrarian University</span>
      </a>
      , 09/2015 - 07/2019)
    </p>
    <p>
      Graduated with High Honors, created a custom Dota leaderboard using Steam
      API and OpenDota API to help develop the local esports scene or to just
      let students to play with people they can meet in real life.
    </p>

    <p class="my-3 text-center text-2xl">Relevant job experience</p>
    <p class="my-2 text-xl">
      Head of IT (
      <a
        class="link"
        href="https://realityrift.gg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Reality Rift</span>
      </a>
      , 02/2021 - 03/2024)
    </p>
    <p>
      Maintained overall IT operations in the arenas, helped staff with training
      and troubleshooting, planned the budget for upgrades and maintenance,
      contacted vendors, ensured availability of internal and external (AWS)
      hardware and services.
    </p>
    <p>Notable achievements:</p>
    <ul>
      <li>
        Managed the migration from SmartLaunch to Gizmo by writing a custom
        parser to reformat existing user data and import it to the new software;
      </li>
      <li>
        Created an internal website for monitoring, reporting and management
        based on Laravel + Vue, using Gizmo API and Stripe API;
      </li>
      <li>
        Implemented a new custom feature not available in Gizmo (paid membership
        with better pricing) by creating a special product, searching it with my
        own service and using Gizmo API to move users between user groups, as
        well as monitoring their membership expiration and moving users to Grace
        Period and default usergroup;
      </li>
      <li>Budgeted, prepared and configured 2 out of 3 arenas in Singapore;</li>
      <li>
        Fixed a bug with default Chinese interface in English-speaking Singapore
        in Gizmo by searching data and providing PR to REST Countries API that
        Gizmo used to select primary language based on country;
      </li>
      <li>
        Prepared a large-scale IT expansion project that never got implemented
        due to failed investment deal
      </li>
    </ul>

    <p class="my-2 text-xl">
      L2 Support Engineer (
      <a
        class="link"
        href="https://www.magnit.com/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Магнит</span>
      </a>
      , 12/2020 - 02/2021)
    </p>
    <p>
      Microservices and database support for the largest Russian food retailer
      (almost 30000 stores), troubleshooting, collecting logs, setting up new
      stores, upgrades and maintenance. Not enough time at the job to get
      notable achievements.
    </p>

    <p class="my-2 text-xl">
      Dota Roster Analyst (
      <a
        class="link"
        href="https://realityrift.gg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Reality Rift</span>
      </a>
      , 07/2019 - 09/2020)
    </p>
    <p>
      Part-time job, provided ad-hoc request for team manager and coach,
      analyzing Dota 2 public, professional and private matches
    </p>
    <p>Notable achievements:</p>
    <ul>
      <li>
        Regularly analyzed large amount of matches (Steam API + OpenDota API) to
        find patterns that could help the team
      </li>
      <li>
        Set up Clarity parser to work with private matches for detailed analysis
      </li>
      <li>
        Brought my part to help the team to get to The Leipzig Major in 2020 and
        get a very unexpected win versus Virtus.Pro
      </li>
    </ul>

    <p class="my-2 text-xl">
      Monitoring Specialist (
      <a
        class="link"
        href="https://ir.mts.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>МТС</span>
      </a>
      , 04/2019 - 12/2020)
    </p>
    <p>
      Part of the monitoring team for the biggest Russian mobile network
      operator based mostly on HP SiteScope and Zabbix alerts with Remedy ITSM
      for ticketing. Watched alerts, created incidents and assigned them to
      corresponding teams along with checking for SLA compliance. Later moved to
      reporting/developer job within the same team.
    </p>
    <p>Notable achievements:</p>
    <ul>
      <li>Trained a junior staff member for monitoring team replacement</li>
      <li>
        Created a TV-wall displayed autoupdating custom dashboard based on
        PL/SQL queries and PHP+JS+Bootstrap that improved the performance of the
        team (color-coded prioritized incidents and real-time expiring SLA
        status)
      </li>
    </ul>

    <p class="my-2 text-xl">
      Desktop Support Engineer (
      <a
        class="link"
        href="https://kubsau.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Kuban State Agrarian University</span>
      </a>
      , 11/2016 - 04/2019)
    </p>
    <p>
      Part-time job in parallel with the education. Provided ticket-based
      hardware and software support for ~1500 PCs, which includes hardware and
      software installation, configuration, troubleshooting and small component
      repairs.
    </p>
    <p>Notable achievements:</p>
    <ul>
      <li>Created Powershell and Batch scripts for ease of configuration</li>
      <li>
        Created and maintained a pre-configured OS image used by other team
        members
      </li>
    </ul>

    <p class="my-3 text-center text-2xl">Freelance projects</p>
    <p class="my-2 text-xl">
      Full IT operations,
      <a
        class="link"
        href="https://polirec.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Polirec</span>
      </a>
      , 2020
    </p>
    <p>
      Setting up office, configuring workstations and printing hardware, initial
      website development
    </p>

    <p class="my-2 text-xl">
      Full IT operations,
      <a
        class="link"
        href="https://liquipedia.net/dota2/SPAWN_Team"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>SPAWN</span>
      </a>
      , 2023
    </p>
    <p>
      Hardware and network configuration and maintenance for Vietnamese Dota 2
      team
    </p>

    <p class="my-3 text-center text-2xl">Pet projects</p>
    <p class="my-2 text-xl">
      Everything,
      <a
        class="link"
        href="https://blackmine.cc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Blackmine</span>
      </a>
      , 2022 - now
    </p>
    <p>Minecraft modpack + public server, currently in development</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

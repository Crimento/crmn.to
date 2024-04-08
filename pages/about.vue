<template>
  <div class="container card m-10 flex-1 bg-base-100/90 p-1 md:p-3">
    <span class="text-center text-2xl"> List of random facts about me </span>
    <ul class="list-disc p-5 text-xl">
      <li>Really tall (193cm);</li>
      <li>
        Speak three languages (native Russian, upper intermediate English, and
        basic Ukrainian)
      </li>
      <li>Got a medal in the interschool chess tournament;</li>
      <li>Got a medal for beating the track time record at go-karting;</li>
      <li>
        Expelled for academic failure just to do the entry exams again and
        graduate with high honors in
        <a
          href="http://kubsau.ru"
          target="_blank"
          class="link"
          rel="noopener noreferrer"
        >
          <span>Kuban State Agrarian University;</span>
        </a>
      </li>
      <li>Worked as a cemetery guard;</li>
      <li>
        Got a severe injury during my military service but got promoted to
        junior sergeant nonetheless;
      </li>
      <li>
        Created a university Dota 2 and CS leaderboard to help people make teams
        and casually play together as my diploma project;
      </li>
      <li>
        Made a career out of it, joining
        <a
          class="link"
          href="https://liquipedia.net/dota2/Reality_Rift_(Singaporean_Team)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Reality Rift Dota 2 Team</span>
        </a>
        as an analyst;
      </li>
      <li>
        Received MTA certification for Cloud Fundamentals and Security
        Fundamentals;
      </li>
      <li>
        Joined
        <a
          class="link"
          href="https://mts.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>МТС</span>
        </a>
        as a monitoring specialist and significantly improved the performance of
        the department by writing a custom dashboard to monitor high-priority
        incidents and SLAs in real-time;
      </li>
      <li>Promoted to Reality Rift head of IT with a full-time job;</li>
      <li>
        Got married and almost moved to Ukraine but never got the chance to move
        due to the Russian invasion;
      </li>
      <li>
        Relocated to Viet Nam with work trips to Singapore and partially
        assimilated into the local culture;
      </li>
      <li>
        Managed a migration between two billing services for the LAN shop by
        writing a custom parser to preserve the userdata and upload it via API;
      </li>
      <li>
        Created a deeply integrated reporting and management website for company
        internal use;
      </li>
      <li>
        Fixed a bug in
        <a
          class="link"
          href="https://gizmopowered.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Gizmo</span>
        </a>
        that used a Chinese default UI in mostly English-speaking Singapore by
        providing a
        <a
          class="link"
          href="https://gitlab.com/restcountries/restcountries/-/merge_requests/69"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Pull Request</span>
        </a>
        to REST Countries API.;
      </li>
      <li>
        Working on
        <a
          class="link"
          href="https://github.com/blackmine-mc/Sunfall"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Minecraft modpack</span>
        </a>
        themed around nuclear wasteland;
      </li>
      <li>
        Created this website to test my web developer skills (auto deployed
        using Github Actions).
      </li>
    </ul>
    <p class="text-2xl">Who knows what's next?</p>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "crmn.to - About",
  meta: [{ name: "description", content: "crmn.to - About me" }],
});
</script>

<style scoped></style>

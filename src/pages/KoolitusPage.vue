<script setup>
import { ref } from 'vue'

import estonianImg from '../images/studyestonian.png'
import englishImg from '../images/studyenglish.png'
import accountingImg from '../images/raamatupidamine.png'
import musicImg from '../images/muusika.png'
import artImg from '../images/kunst.png'

const openId = ref(null)

const courses = [
  {
    id: 'estonian',
    title: 'Eesti keele koolitus',
    level: 'A2–B2',
    duration: '4–6 kuud',
    schedule: '2–3 korda nädalas, 90 min tund',
    price: 'Tasuta',
    note: 'Lapsehoiuteenuse kasutamine võimalik',
    image: estonianImg,
    curriculumLabel: 'Eesti keele õppekava',
  },
  {
    id: 'english',
    title: 'Inglise keele koolitus',
    level: 'A2–B2',
    duration: '4–6 kuud',
    schedule: '2–3 korda nädalas, 90 min tund',
    price: 'Tasuta',
    note: 'Lapsehoiuteenuse kasutamine võimalik',
    image: englishImg,
    curriculumLabel: 'Inglise keele õppekava',
  },
  {
    id: 'accounting',
    title: 'Raamatupidamine',
    level: 'Algajatele ja edasijõudnutele',
    duration: 'maht kokkuleppel',
    schedule: 'Õpe eesti ja vene keele baasil',
    price: '140 € kuus',
    note: 'Lapsehoiuteenuse kasutamine võimalik',
    image: accountingImg,
    curriculumLabel: 'Raamatupidamise õppekava',
  },
  {
    id: 'music',
    title: 'Muusikastuudio',
    level: 'Laul ja pillitunnid',
    duration: 'pidev õpe, individuaalne kava',
    schedule: 'Ajakava vastavalt õppijale',
    price: '120 € kuus',
    note: 'Lapsehoiuteenuse kasutamine võimalik',
    image: musicImg,
    curriculumLabel: 'Muusikastuudio õppekava',
  },
  {
    id: 'art',
    title: 'Kunstistuudio',
    level: 'Joonistamine, maalimine, keraamika jm',
    duration: 'pidev õpe, individuaalne kava',
    schedule: 'Õhtused ja päevased grupid',
    price: '120 € kuus',
    note: 'Lapsehoiuteenuse kasutamine võimalik',
    image: artImg,
    curriculumLabel: 'Kunstistuudio õppekava',
  },
]

const toggle = (id) => {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <main class="koolitus">
    <section class="koolitus-intro">
      <h1>Koolitused ja kursused</h1>
      <p>
        Elite Keskuses pakume eesti ja inglise keele koolitusi, raamatupidamise kursusi ning muusika- ja kunstistuudio tunde.
        Kursused on mõeldud pereinimestele, kes vajavad paindlikku ajagraafikut ja võimalust kasutada lapsehoiuteenust.
      </p>
    </section>

    <section class="courses-grid">
      <article
        v-for="course in courses"
        :key="course.id"
        class="course-card"
        :class="{ open: openId === course.id }"
        @click="toggle(course.id)"
      >
        <div class="course-main">
          <div class="course-text">
            <h2>{{ course.title }}</h2>
            <ul class="course-meta">
              <li v-if="course.level"><strong>Tase:</strong> {{ course.level }}</li>
              <li v-if="course.duration"><strong>Kestus:</strong> {{ course.duration }}</li>
              <li v-if="course.schedule"><strong>Õppevorm:</strong> {{ course.schedule }}</li>
              <li v-if="course.price"><strong>Kuutasu:</strong> {{ course.price }}</li>
            </ul>
            <p v-if="course.note" class="course-note">
              {{ course.note }}
            </p>

            <button
              class="more-btn"
              @click.stop="toggle(course.id)"
            >
              {{ openId === course.id ? 'Sulge' : 'Loe lähemalt' }}
            </button>
          </div>

          <div class="course-image">
            <img :src="course.image" :alt="course.title" />
          </div>
        </div>

        <transition name="fade">
          <div v-if="openId === course.id" class="course-details">
            <!-- Eesti & inglise keel (sama tekst praegu mõlemal) -->
            <template v-if="course.id === 'estonian' || course.id === 'english'">
              <p>
                Elite Koolitusel saab õppida eesti ja inglise keelt alg- ning kesktasemel. Keeleõppes pööratakse tähelepanu nii
                suhtluskeelele kui ka grammatikale. Kursused toimuvad vene ja inglise keele baasil 2–3 korda nädalas.
              </p>
              <p>
                Sõltuvalt keele omandamise kiirusest kestab üks kursus 4–6 kuud, keeletund 90 minutit. Kokkuleppel õpetajaga on
                võimalik osaleda ka e-õppes (Skype või Zoom).
              </p>
              <p>
                <strong>Tegevusluba:</strong> nr 157 ja nr 174<br />
                <strong>Majandustegevuse teade:</strong> nr 218073
              </p>
              <p>
                <strong>Eesti keele õpetajad:</strong> Liivia Kroon, Lena Malysheva, Alina Koop<br />
                <strong>Inglise keele õpetaja:</strong> Shannon Kiprits
              </p>
              <p>
                <strong>Kuutasu:</strong> Tasuta<br />
                <em>NB! Võimalik kasutada koolituse ajal lapsehoiu tugiteenust.</em>
              </p>
            </template>

            <!-- Raamatupidamine -->
            <template v-else-if="course.id === 'accounting'">
              <p>
                Raamatupidamise koolitused toimuvad algajatele ja edasijõudnutele eesti ja vene keele baasil. Kursuse läbinud
                saavad hea ettevalmistuse raamatupidaja tööks ning vajalikud teadmised ja oskused raamatupidamise
                korraldamisel ettevõttes ning raamatupidamisprogrammide kasutamiseks.
              </p>
              <p><strong>Õpetajad:</strong> Anneli Annus ja Jelena Aasma</p>
              <p>
                <strong>Kuutasu:</strong> 140 €<br />
                <em>NB! Võimalik kasutada koolituse ajal lapsehoiu tugiteenust.</em>
              </p>
            </template>

            <!-- Muusikastuudio -->
            <template v-else-if="course.id === 'music'">
              <p>
                Muusikastuudios saab õppida laulu erialal või pilliõppes. Vastavalt õppuri eesmärgile koostatakse individuaalne
                õppekava ja ajakava.
              </p>
              <p>
                Siin on võimalus õppida klaverit, viiulit, kitarri, baaskitarri või trumme. Õpitud teosed salvestatakse
                helifailidena ning korraldatakse õppeaasta jooksul kontserte.
              </p>
              <p><strong>Õpetaja:</strong> Laura Jõgeva</p>
              <p>
                <strong>Kuutasu:</strong> 120 €<br />
                <em>NB! Võimalik kasutada koolituse ajal lapsehoiu tugiteenust.</em>
              </p>
            </template>

            <!-- Kunstistuudio -->
            <template v-else-if="course.id === 'art'">
              <p>
                Kunstistuudios saab õppida joonistamist, maalimist, keraamikat, siidimaali ja skulptuuri. Keraamikakursusel on
                suurepärane võimalus ennast väljendada ja luua midagi oma kätega iseendale või kingituseks.
              </p>
              <p>
                Kursusel antakse ülevaade savi kui nõudliku materjali eripäradest ning glasuuride maailmast.
              </p>
              <p><strong>Õpetajad:</strong> Jana Kormašov ja Jane Siimso-Merivoo</p>
              <p>
                <strong>Kuutasu:</strong> 120 €<br />
                <em>NB! Võimalik kasutada koolituse ajal lapsehoiu tugiteenust.</em>
              </p>
            </template>

            <a href="#" class="curriculum-link">
              {{ course.curriculumLabel }} →
            </a>
          </div>
        </transition>
      </article>
    </section>

    <section class="support-note">
      <h2>Tugiteenused lapsevanematele</h2>
      <p>
        Perekeskusena toetame lapsevanemaid, kes viibivad lapsehoolduspuhkusel ja ei saa seetõttu mujal koolitustel osaleda.
        Koolituste ajal on võimalik kasutada lapsehoiuteenust vanematel, kelle laps on 1,5–7-aastane ja ei käi veel lasteaias.
      </p>
    </section>
  </main>
</template>

<style scoped>
.koolitus {
  padding: 4rem 3rem 5rem;
  background: #f9f7fa;
}

/* Intro */

.koolitus-intro {
  max-width: 900px;
  margin: 0 auto 3rem;
}

.koolitus-intro h1 {
  margin-bottom: 1rem;
}

.koolitus-intro p {
  line-height: 1.7;
  color: #444;
}

/* GRID: 2–2–1, equal card widths, nice spacing */

.courses-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 columns */
  grid-auto-rows: auto;
  column-gap: 50px; /* horizontal space */
  row-gap: 50px;    /* vertical space */
}

/* 5. kaart (Kunstistuudio) – oma rida, keskel */
.courses-grid > article:nth-child(5):not(.open) {
  grid-column: 1 / -1;
  justify-self: center;
}


.course-card {
  width: 100%;
  max-width: 520px;          /* all cards same width */
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  padding: 1.5rem 1.75rem;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  cursor: pointer;
  overflow: hidden; 
}


.course-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.course-card.open {
  grid-column: 1 / -1;  /* span both columns */
  max-width: 100%;      /* ignore the 520px when open */
}


.course-main {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1.3fr);
  gap: 1.5rem;
  align-items: center;
  width: 100%;
}

.course-text h2 {
  margin: 0 0 0.8rem;
  font-size: 1.4rem;
}

.course-meta {
  list-style: none;
  padding: 0;
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  color: #444;
}

.course-meta li {
  margin-bottom: 0.2rem;
}

.course-note {
  margin: 0.4rem 0 0.8rem;
  font-size: 0.9rem;
  color: #666;
}

.more-btn {
  padding: 0.5rem 1.2rem;
  border-radius: 999px;
  border: none;
  background: #c92a7b;
  color: #fff;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;
}

.more-btn:hover {
  background: #a81f63;
  transform: translateY(-1px);
}

.course-image {
  text-align: right;
}

.course-image img {
  max-width: 190px;
  width: 100%;
  height: 130px;            /* 🔹 consistent image height */
  border-radius: 14px;
  object-fit: cover;
}

/* Details / expanded text */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.course-details {
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid #f0d5e6;
  font-size: 0.96rem;
  line-height: 1.7;
  color: #444;
  max-width: 100%; /* stay inside card */
  overflow-wrap: break-word;
}

.course-details p {
  margin-bottom: 0.85rem;
}

.curriculum-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 500;
  color: #c92a7b;
  text-decoration: none;
}

.curriculum-link:hover {
  text-decoration: underline;
}

/* Support note */

.support-note {
  max-width: 900px;
  margin: 3rem auto 0;
}

.support-note p {
  line-height: 1.7;
  color: #444;
}

/* Mobile */

@media (max-width: 800px) {
  .koolitus {
    padding: 3rem 1.5rem 4rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .course-card {
    max-width: 100%;
  }

  .course-main {
    grid-template-columns: 1fr;
  }

  .course-image {
    text-align: left;
  }

  .course-image img {
    max-width: 100%;
    height: auto;
  }
}
</style>

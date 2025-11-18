<script setup>
import { ref } from 'vue'

const openId = ref('languages')

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

    <section class="accordion">
      <!-- Keelekoolitused -->
      <article class="accordion-item">
        <button class="accordion-header" @click="toggle('languages')">
          <span>Eesti ja inglise keele koolitused</span>
          <span class="chevron" :class="{ open: openId === 'languages' }">⌄</span>
        </button>
        <div v-if="openId === 'languages'" class="accordion-body">
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
        </div>
      </article>

      <!-- Raamatupidamine -->
      <article class="accordion-item">
        <button class="accordion-header" @click="toggle('accounting')">
          <span>Raamatupidamine</span>
          <span class="chevron" :class="{ open: openId === 'accounting' }">⌄</span>
        </button>
        <div v-if="openId === 'accounting'" class="accordion-body">
          <p>
            Raamatupidamise koolitused toimuvad algajatele ja edasijõudnutele eesti ja vene keele baasil. Kursuse läbinud saavad
            hea ettevalmistuse raamatupidaja tööks ning vajalikud teadmised ettevõtte raamatupidamise korraldamiseks ja
            raamatupidamisprogrammide kasutamiseks.
          </p>
          <p><strong>Õpetajad:</strong> Anneli Annus, Jelena Aasma</p>
          <p>
            <strong>Kuutasu:</strong> 140 €<br />
            <em>NB! Võimalik kasutada koolituse ajal lapsehoiu tugiteenust.</em>
          </p>
        </div>
      </article>

      <!-- Muusika -->
      <article class="accordion-item">
        <button class="accordion-header" @click="toggle('music')">
          <span>Muusikastuudio</span>
          <span class="chevron" :class="{ open: openId === 'music' }">⌄</span>
        </button>
        <div v-if="openId === 'music'" class="accordion-body">
          <p>
            Muusikastuudios saab õppida laulu või pilliõpet. Vastavalt õppuri eesmärkidele koostatakse individuaalne
            õppekava ja ajakava.
          </p>
          <p>
            On võimalus õppida klaverit, viiulit, kitarri, baaskitarri või trumme. Õpitud teosed salvestatakse
            helifailidena ning korraldatakse kontserte õppeaasta jooksul.
          </p>
          <p><strong>Õpetaja:</strong> Laura Jõgeva</p>
          <p>
            <strong>Kuutasu:</strong> 120 €<br />
            <em>NB! Võimalik kasutada koolituse ajal lapsehoiu tugiteenust.</em>
          </p>
        </div>
      </article>

      <!-- Kunst -->
      <article class="accordion-item">
        <button class="accordion-header" @click="toggle('art')">
          <span>Kunstistuudio</span>
          <span class="chevron" :class="{ open: openId === 'art' }">⌄</span>
        </button>
        <div v-if="openId === 'art'" class="accordion-body">
          <p>
            Kunstistuudios saab õppida joonistamist, maalimist, keraamikat, siidimaali ja skulptuuri. Keraamikakursusel on
            suurepärane võimalus ennast väljendada ja luua midagi oma kätega.
          </p>
          <p>
            Kursusel antakse ülevaade savi kui materjali eripäradest ning glasuuride maailmast.
          </p>
          <p><strong>Õpetajad:</strong> Jana Kormašov, Jane Siimso-Merivoo</p>
          <p>
            <strong>Kuutasu:</strong> 120 €<br />
            <em>NB! Võimalik kasutada koolituse ajal lapsehoiu tugiteenust.</em>
          </p>
        </div>
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
}

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

.accordion {
  max-width: 900px;
  margin: 0 auto;
}

.accordion-item {
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 3px 8px rgba(0,0,0,0.06);
  margin-bottom: 1rem;
  overflow: hidden;
}

.accordion-header {
  width: 100%;
  padding: 1rem 1.5rem;
  background: #f7f1f7;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.05rem;
  cursor: pointer;
}

.chevron {
  transition: transform 0.2s ease;
}

.chevron.open {
  transform: rotate(180deg);
}

.accordion-body {
  padding: 1rem 1.5rem 1.25rem;
  line-height: 1.7;
  color: #444;
}

.support-note {
  max-width: 900px;
  margin: 3rem auto 0;
}

.support-note p {
  line-height: 1.7;
  color: #444;
}
</style>

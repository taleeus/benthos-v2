<script setup lang="ts">
import EpkBanner from "../components/EpkBanner.vue";
import Section from "../components/Section.vue";
import GallerySection from "../components/sections/GallerySection.vue";

import { storeToRefs } from "pinia";
import { useScreenStore } from "../stores/useScreen";

const { isMobile, isTablet } = storeToRefs(useScreenStore());

const videoIds = ["hzknSmWxw2I", "TQuuQxOuI_k", "iXOm0oeMGZc", "1tVxbYR59Gc"];

const galleryUris = [
  "/assets/gallery/medium/all-slaughter.medium.avif",
  "/assets/gallery/medium/bside-building.medium.avif",
  "/assets/gallery/medium/gl-slaughter.medium.avif",
  "/assets/gallery/medium/pap-slaughter.medium.avif",
  "/assets/gallery/medium/ale-slaughter.medium.avif",
  "/assets/gallery/medium/heads.medium.avif",
  "/assets/gallery/medium/alby-slaughter.medium.avif",
  "/assets/gallery/medium/all-modena.medium.avif",
  "/assets/gallery/medium/heads-debris.medium.avif",
  "/assets/gallery/medium/trip-slaughter.medium.avif",
];

const galleryPlaceholders = [
  "/assets/gallery/small/all-slaughter.small.avif",
  "/assets/gallery/small/bside-building.small.avif",
  "/assets/gallery/small/gl-slaughter.small.avif",
  "/assets/gallery/small/pap-slaughter.small.avif",
  "/assets/gallery/small/ale-slaughter.small.avif",
  "/assets/gallery/small/heads.small.avif",
  "/assets/gallery/small/alby-slaughter.small.avif",
  "/assets/gallery/small/all-modena.small.avif",
  "/assets/gallery/small/heads-debris.small.avif",
  "/assets/gallery/small/trip-slaughter.small.avif",
];
</script>

<template>
  <div>
    <EpkBanner />
    <div class="h-16 w-full"></div>
    <video
      autoplay
      muted
      loop
      :poster="
        isMobile
          ? '/assets/bgVideos/dragonfly/dragonfly-clip-mobile-cover.avif'
          : '/assets/bgVideos/dragonfly/dragonfly-clip-mobile.avif'
      "
      class="h-auto w-full"
    >
      <source
        :src="
          isMobile
            ? '/assets/bgVideos/dragonfly/dragonfly-clip-mobile.webm'
            : '/assets/bgVideos/dragonfly/dragonfly-clip.webm'
        "
        type="video/webm"
      />
    </video>
    <!-- <div
      class="h-[35vh] w-full bg-debris-bside-gradient bg-cover bg-top px-8 transition-all duration-500 lg:h-[48rem] lg:px-32"
    ></div> -->
    <div class="flex flex-col lg:flex-row">
      <Section title="Bio" class="bg-black text-egg">
        <div class="text-justify text-base lg:text-lg">
          <p>
            A curious, experimental, pure rock unit based out of Milan. Benthos
            present a compelling blend of progressive metal, mathcore,
            renaissance music, and jazz-fusion. By combining ethereal
            atmospheric song structures with geometric heavy riffs, the result
            is a unique universe of sound which you must hear to believe.
          </p>
          <br />
          <p>
            After scoring a support gig opening for
            <strong>The Contortionist</strong> at Circolo Svolta in Milan in
            early 2019, the band suddenly caught the Italian’s scene attention.
          </p>
          <br />
          <p>
            In 2021, American label
            <a
              href="https://www.eclipserecords.com/"
              target="_blank"
              class="not-italic transition-all duration-400 hover:text-cream"
              >Eclipse Records</a
            >
            released the band's debut album "II", which impressed the metal and
            progressive community worldwide. The album was promoted with the
            European "The Essence Tour" in 2022.
          </p>
          <br />
          <p>
            In 2023, Benthos marked the main stage of
            <a
              href="http://www.metalhammer.it/live-report/2023/06/11/dissonance-festival-2023-meshuggah-soen-destrage-more-circolo-magnolia-milano-3-giugno-2023/"
              target="_blank"
              class="not-italic transition-all duration-400 hover:text-cream"
              >Dissonance Festival</a
            >
            in Milan at Circolo Magnolia as an opening act for
            <strong>Meshuggah</strong> alongside <strong>Soen</strong>,
            <strong>Destrage</strong>, and <strong>ten56</strong>. A live
            performance of <em>"Talk to Me, Dragonfly"</em>, their most
            successful single up to date, has been recorded and released on
            <a
              href="https://youtu.be/ue1BDz156Z4?si=Zk0PgSiJT4YZ2oTm"
              target="_blank"
              class="not-italic transition-all duration-400 hover:text-cream"
              >YouTube</a
            >
            and
            <a
              href="https://lnk.to/bnttlk"
              target="_blank"
              class="not-italic transition-all duration-400 hover:text-cream"
              >all streaming platforms</a
            >.
          </p>
          <br />
          <p>
            As of October 2023, the band is working on their second full-length
            album, which will be produced by mixing engineer Federico Ascari and
            mastered by Tony Lindgren, main mastering engineer at Jens Bogren's
            <strong>Fascination Street Studios</strong>.
          </p>
          <br />

          <div class="pt-4">
            <h2 class="mb-6 text-2xl font-bold uppercase">Press Quotes</h2>
            <p class="border-l-2 border-solid border-cream pl-6">
              “They are one of the true revelations of the day. The band [...]
              immediately displays exceptional talent, born from the remarkable
              skills of the musicians involved and an uncommon taste that
              seamlessly blends modern progressive metal with a decadent
              post-rock. They create a succession of rich and emotionally
              impactful sonic nuances. Benthos manages to destabilize and
              surprise the audience with rhythm and vocal changes in a highly
              original emotional crescendo. The unreleased songs they present
              hint at great things for the band's future in the world of music
              recording” —
              <a
                href="https://www-metalhammer-it.translate.goog/live-report/2023/06/11/dissonance-festival-2023-meshuggah-soen-destrage-more-circolo-magnolia-milano-3-giugno-2023/?_x_tr_sch=http&_x_tr_sl=it&_x_tr_tl=en&_x_tr_hl=it&_x_tr_pto=wapp"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >Metal Hammer</a
              ><span class="not-italic"
                >, Dissonance Festival 2023 Live Report</span
              >
            </p>
            <br />
            <p class="border-l-2 border-solid border-cream pl-6">
              “The bar is set very high with this album. [...] Benthos will have
              to be measured against this debut album in the future, although
              they certainly are not afraid of it. These are probably such
              creative minds who walk around with a note and a pen in order to
              be able to write down all song ideas immediately”—
              <a
                href="https://time-for-metal.eu/benthos-ii/"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >Time For Metal</a
              ><span class="not-italic tracking-widest">, 9.5/10</span>
            </p>
            <br />
            <p class="border-l-2 border-solid border-cream pl-6">
              "I’ve found myself drawn back again and again to these tracks and
              am sure many of you will feel the same after you give it a go"—
              <a
                href="https://metaltrenches.com/reviews/benthos-ii-album-review-3079"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >Metal Trenches</a
              ><span class="not-italic tracking-widest">, 8.7/10</span>
            </p>
            <br />
            <p class="border-l-2 border-solid border-cream pl-6">
              “Benthos set an exclamation point in the international progressive
              metal scene with II. With a flawless sound, innovative ideas and
              familiar aspects the Italians have proven that they can also
              compete on an international level” —
              <a
                href="https://www.morecore.de/review/benthos/ii/"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >MoreCore.De</a
              ><span class="not-italic tracking-widest">, 8/10</span>
            </p>
            <br />
            <p class="border-l-2 border-solid border-cream pl-6">
              “Exploring the outer fringes of musical convention and coming
              dangerously close to redefining the concept of progressive metal,
              a bold new player emerges from the Italian peninsula with a short
              yet gargantuan stylistic excursion of a debut” —
              <a
                href="https://www.sonicperspectives.com/album-reviews/benthos-ii/"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >Sonic Perspective</a
              ><span class="not-italic tracking-widest">, 8.4/10</span>
            </p>
            <br />
            <p class="border-l-2 border-solid border-cream pl-6">
              “Benthos represent a high-level band with great potential,
              certainly attentive to every little detail as the album cover
              unmistakably testifies. It is not common to listen to a debut
              album of this caliber, and this represents an excellent starting
              point to appreciate an Italian band that has all the elements to
              continue impressing the listener” —
              <a
                href="https://www-truemetal-it.translate.goog/recensioni/ii-14?_x_tr_sl=it&_x_tr_tl=en&_x_tr_hl=it&_x_tr_pto=wapp"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >True Metal</a
              ><span class="not-italic tracking-widest">, 75/100</span>
            </p>
            <br />
            <p class="border-l-2 border-solid border-cream pl-6">
              “I was absolutely stricken when I discovered Benthos. I can and
              also can’t understand how I managed to miss out on this band and
              how basically no one is talking about them. [...] Benthos, if
              we’re all lucky enough, will have a proper chance to bloom into
              what could be one of the finest bands on the prog metal scene.
              [...] Honestly II basically fulfills the entire checklist for a
              record that’s not only very relistenable, fresh, and packed, but
              also highly promising” —
              <a
                href="https://www.scenepointblank.com/reviews/benthos/ii/"
                target="_blank"
                class="not-italic transition-all duration-400 hover:text-cream"
                >Scene Point Blank</a
              ><span class="not-italic tracking-widest">, 8.5/10</span>
            </p>
          </div>
          <br /><br />
        </div>
      </Section>
      <div>
        <Section title="Music" class="h-full bg-black pt-0 pb-20 text-white">
          <div
            class="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start lg:flex-col lg:items-center"
          >
            <iframe
              class="rounded-md drop-shadow-lg"
              src="https://open.spotify.com/embed/playlist/5PPnrtqNsvNpFy0b0UCYbp?utm_source=generator&theme=0"
              :width="isMobile ? '100%' : 400"
              :height="isMobile ? 400 : 635"
              frameBorder="0"
              allow="autoplay; clipboappears for the first asard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/album/5N8Sujic3j3c81bEW2cfSj?utm_source=generator&theme=0"
              :width="isMobile ? '100%' : 400"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <div class="mt-10 text-center">
            <h1
              class="py-6 text-center text-3xl font-bold uppercase tracking-widest lg:py-10 lg:text-4xl"
            >
              Band members
            </h1>
            <ul>
              <li>Gabriele Papagni — guitars</li>
              <li>Enrico Tripodi — guitars</li>
              <li>Gabriele Landillo — vocals, keys</li>
              <li>Alberto Fiorani — bass guitar</li>
              <li>Alessandro Tagliani — drums</li>
            </ul>
            <span class="mt-6 inline-flex gap-2 font-bold"
              ><FontAwesomeIcon
                icon="envelope"
                class="m-auto text-2xl md:mx-2 lg:mx-2 lg:text-base"
              />
              <p>benthos.milano@gmail.com</p></span
            >
          </div>
        </Section>
      </div>
    </div>
    <Section title="Singles" class="bg-debris bg-cover px-0 pb-12 text-white">
      <div class="flex flex-wrap justify-center gap-10">
        <iframe
          v-for="videoId in videoIds"
          :key="videoId"
          :width="isMobile ? 360 : isTablet ? 400 : 700"
          :height="isMobile ? 200 : 450"
          :src="`https://www.youtube.com/embed/${videoId}?modestbranding=1`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          rel="0"
          loading="lazy"
        />
      </div>
    </Section>
    <Section title="Gallery" class="bg-white pb-16 lg:pb-28 lg:pt-14">
      <GallerySection
        :gallery-uris="galleryUris"
        :gallery-placeholders="galleryPlaceholders"
      ></GallerySection>
    </Section>
    <Section
      title="Live Performance"
      class="flex flex-col items-center justify-center gap-10 bg-ii bg-cover bg-center py-20 text-white"
    >
      <div>
        <iframe
          :width="isMobile ? 360 : isTablet ? 400 : 1160"
          :height="isMobile ? 200 : 653"
          src="https://www.youtube.com/embed/ue1BDz156Z4"
          title="Benthos - Talk to Me, Dragonfly! Live at Dissonance Festival"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Section>
  </div>
</template>

<style scoped></style>

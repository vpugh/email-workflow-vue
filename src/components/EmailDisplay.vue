<template>
    <div class="column is-8">
      <div class="bd-notification">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-grey-dark">
              3. View Displayed Email.
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
              <!-- {{ currentTemplate }} -->
              <!-- <cced_od_parent/> -->
              <div class="field" v-for="field in fields" :key="field.id">
                  <div class="control" v-if="field.type == 'input'" >Test</div>
            </div>
              <cced_od_webinar></cced_od_webinar>
              <!-- <cced-od-email
                v-bind:header="fields[0].value" 
                v-bind:title="fields[1].value"
                v-bind:presenter="fields[2].value"
                v-bind:provider="fields[3].value"
                v-bind:comsupporter="fields[4].value"
                v-bind:cost="fields[5].value"
                v-bind:credits="fields[6].value"
                v-bind:expiration="fields[7].value"
                v-bind:description="fields[8].value"
                v-bind:webinarlink="fields[16].value">
              </cced-od-email> -->
            <!-- <cced-email 
              v-bind:header="fields[0].value" 
              v-bind:title="fields[1].value"
              v-bind:presenter="fields[2].value"
              v-bind:provider="fields[3].value"
              v-bind:comsupporter="fields[4].value"
              v-bind:cost="fields[5].value"
              v-bind:credits="fields[6].value"
              v-bind:expiration="fields[7].value"
              v-bind:description="fields[8].value"
              v-bind:webinarlink="fields[16].value">
            </cced-email> -->
          </div>
        </div>
      </div>
      <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-grey-dark">
              4. Download Code.
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-6">
                  <div class="content">Code</div>
                  <button>Download Code</button>
                </div>
                <div class="column is-6">
                  <div class="content">Text</div>
                  <button>Download Text-Only Version</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

import cced_od_webinar from '../templates/cced-od';
import cced_reg_webinar from '../templates/cced-reg';
import cced_rem_webinar from '../templates/cced-rem';
import cdew_reg_webinar from '../templates/cdew-reg';
import cdew_rem_webinar from '../templates/cdew-reminder';
import cdew_od_webinar from '../templates/cdew-od';
import cced_od_parent from '../templates/cced_od_parent.js';

export default {
    name: 'EmailDisplay',
    props: ['fields'],
    // render(h) {
    //     return h("div", ["Text in Parent", h(cced_od_webinar)]);
    // },
    components: {
        cced_od_webinar,
        cced_reg_webinar,
        cced_rem_webinar,
        cdew_reg_webinar,
        cdew_rem_webinar,
        cdew_od_webinar,
        cced_od_parent
    },
    data () {
        return {

        }
    }
}
</script>

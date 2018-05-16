<template>
    <div class="container">
  <div class="columns">
    <EmailSidebar
    v-bind:fields="fields"></EmailSidebar>
    <EmailDisplay></EmailDisplay>
  </div>
</div>
</template>

<script>
// import ccedodemail from "../templates/cced-od-email";
import EmailSidebar from "./EmailSidebar";
import EmailDisplay from "./EmailDisplay";

export default {
    name: 'EmailWorkflow',
    components: {
        // ccedodemail,
        EmailDisplay,
        EmailSidebar
    },
    data () {
        return {
        fields: [
          { type: 'input', label: 'Header', name: 'header', value: 'Free On-Demand CE Webinar'},
          { type: 'input', label: 'Title', name: 'title', value: 'Minimizing Risk: Screw-Retained and Cement-Retained Implant Restorations'},
          { type: 'input', label: 'Presenter Name', name: 'presenter-name', value: 'Sreenivas Koka, DDS, PhD'},
          { type: 'input', label: 'Provider', name: 'provider', value: 'AEGIS Publications, LLC'},
          { type: 'input', label: 'Commercial Supporter', name: 'commercial-supporter', value: 'Nobel Biocare'},
          { type: 'input', label: 'Cost', name: 'cost', value: '0.00'},
          { type: 'input', label: 'CDE Credits', name: 'cde-credits', value: '1 Self Study'},
          { type: 'input', label: 'Expiration Date', name: 'expiration-date', value: 'September 2017 - September 30th, 2020'},
          { type: 'textarea', label: 'Description', name: 'description', value: 'This program will review the pros and cons of screw-retained and cement-retained implant restorations, with a focus on minimization of complications and the need for additional procedures.'},
          { type: 'input', label: 'Learning Objective 1', name: 'LO-1', value: ''},
          { type: 'input', label: 'Learning Objective 2', name: 'LO-2', value: ''},
          { type: 'input', label: 'Learning Objective 3', name: 'LO-3', value: ''},
          { type: 'input', label: 'Disclosure', name: 'disclosure', value: ''},
          { type: 'input', label: 'Call-to-Action', name: 'cta', value: ''},
          { type: 'input', label: 'Webinar Link', name: 'webinar-link', value: 'http://google.com'},
          { type: 'input', label: 'Headshot Link', name: 'headshot-link', value: ''},
          { type: 'input', label: 'TV Link', name: 'tv-Link ', value: ''}
        ]
        }
    }
}
</script>


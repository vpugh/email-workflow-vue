<template>
    <div class="column is-4">
      <div class="bd-notification">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-grey-dark">
              1. Select Email Template &amp; Options
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="select">
                <select name="email-template" id="email-template" v-model="currentTemplate">
                    <option value="default" selected disabled>Select a Template</option>
                    <option v-for="emaillist in emailLists" :key="emaillist.id" :value="emaillist.template">{{emaillist.name}}</option>
                    </select>
              </div>
            </div>
            <div class="content">
              <div class="select">
                <select name="email-list" id="" v-model="currentUnsubscribes">
                  <option value="default" selected>Select Email List - Unsubscribe</option>
                  <option v-for="subs in unsubHash" :key="subs.id" :value="subs.unsub">{{subs.name}}</option>
                </select>
              </div>
            </div>
             <div class="content">
              <div class="select">
                <select name="send-month" id="" v-model="currentMonth">
                  <option value="" selected disabled>Email Send Month</option>
                  <option v-for="month in months" :value="month.month" :key="month.id">Send Month - {{month.name}}</option>
                </select>
              </div>
            </div>
            <div class="content">
              <div class="select">
                <select name="send-year" id="" v-model="currentYear">
                  <option value="" selected disabled>Send Year</option>
                  <option v-for="year in years" :key="year.id" :value="year.year">Send Year - {{year.year}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-grey-dark">
              2. Complete the information below.
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="inputs">
                <div class="field" v-for="(field, index) in fields" :key="field.id">
                  <div class="control" v-if="field.type == 'input'" >
                    <input type="text" class="input" :name="field.name" :id="index" v-model="field.value" :placeholder="field.label" @change="fieldUpdate($event.target.value,index)">
                  </div>
                  <div class="control" v-if="field.type == 'textarea'">
                     <textarea class="textarea" :name="field.name" id="" :value="field.value" cols="30" rows="5"></textarea>
                  </div>
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
    name: 'EmailSidebar',
    props: ['fields'],
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
            currentTemplate: '',
            currentMonth: '',
            currentYear: '',
            currentTemplate: 'default',
            currentUnsubscribes: 'default',
            months: [
                {month:'01', name:'January'}, 
                {month:'02', name:'Feburary'}, 
                {month:'03', name:'March'}, 
                {month:'04', name:'April'}, 
                {month:'05', name:'May'}, 
                {month:'06', name:'June'}, 
                {month:'07', name:'July'}, 
                {month:'08', name:'August'}, 
                {month:'09', name:'September'}, 
                {month:'10', name:'October'}, 
                {month:'11', name:'November'}, 
                {month:'12', name:'December'}
            ],
            years: [
                {year: '2017'},
                {year: '2018'},
                {year: '2019'}
            ],
            emailLists: [
                {template: '<cced_od_webinar></cced_od_webinar>', name: 'CCED On-Demand'},
                {template: '<cced_reg_webinar></cced_reg_webinar>', name: 'CCED Registration'},
                {template: '<cced_rem_webinar></cced_rem_webinar>', name: 'CCED Reminder'},
                {template: '<cdew_od_webinar></cdew_od_webinar>', name: 'CDEW On-Demand'},
                {template: '<cdew_reg_webinar></cdew_reg_webinar>', name: 'CDEW On-Registration'},
                {template: '<cdew_rem_webinar></cdew_rem_webinar>', name: 'CDEW On-Reminder'}
            ],
            unsubHash: [
                {unsub: '%%PLUGIN_UNSUBSCRIBE: CCEDWebinar-UNSUBSCRIBE%%', name: 'CCED - Webinar'},
                {unsub: '%%PLUGIN_UNSUBSCRIBE: IDT-UNSUBSCRIBE%%', name: 'IDT - Newsletter'},
                {unsub: '%%PLUGIN_UNSUBSCRIBE: ID-UNSUBSCRIBE%%', name: 'ID - Newsletter'},
                {unsub: '%%PLUGIN_UNSUBSCRIBE: CDEWWebinar-UNSUBSCRIBE%%', name: 'CDEW - Webinar'},
                {unsub: '%%PLUGIN_UNSUBSCRIBE: ID-UNSUBSCRIBE%%', name: 'CDEW - DDS'},
                {unsub: '%%PLUGIN_UNSUBSCRIBE: ID-UNSUBSCRIBE%%', name: 'CDEW - DA'},
                {unsub: '%%PLUGIN_UNSUBSCRIBE: ID-UNSUBSCRIBE%%', name: 'CDEW - LAB'},
                {unsub: '%%PLUGIN_UNSUBSCRIBE: ID-UNSUBSCRIBE%%', name: 'CDEW - HG'}
            ]
        }
    },
    computed: {
        date: function() {
            var d = new Date();
            return d;
        },
        month: function() {
            var currentMonth = this.date.getMonth() + 1;
        if (currentMonth < 10) { 
            this.currentMonth = '0' + '' + currentMonth;
            return currentMonth;
            } 
            currentMonth = currentMonth.toString();
            return currentMonth;
        },
        year: function() {
            var currentYear = this.date.getFullYear();
            this.currentYear = currentYear.toString();
            return currentYear;
        },
        template() {
            var currentTemplate = 'default';
            return currentTemplate;
        },
        unsubscribes() {
            var currentUnsubscribes = 'default';
            return currentUnsubscribes;
        }
        
    }
}
</script>

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
                    <!-- <option value="" disabled selected>CCED Webinar</option> -->
                    <option value="<cced_od></cced_od>" selected>CCED On-Demand</option>
                    <option value="<cced_od></cced_od>">CCED Register</option>
                    <option value="<cced_od></cced_od>">CCED Reminder</option>
                    <!-- <option value="" disabled>ID Webinar</option>
                    <option value="">ID On-Demand</option>
                    <option value="">ID Register</option>
                    <option value="">ID Reminder</option>
                    <option value="" disabled>IDT Webinar</option>
                    <option value="">IDT On-Demand</option>
                    <option value="">IDT Register</option>
                    <option value="">IDT Reminder</option> -->
                    <option value="" disabled>CDEWorld Webinar</option>
                    <option value="<cdew_reg_webinar></cdew_reg_webinar>">CDEW On-Demand</option>
                    <option value="<cdew_reg_webinar></cdew_reg_webinar>">CDEW Register</option>
                    <option value="<cdew_reg_webinar></cdew_reg_webinar>">CDEW Reminder</option>
                    </select>
              </div>
            </div>
            <div class="content">
              <div class="select">
                <select name="email-list" id="">
                  <option value="" selected>Select Email List - Unsubscribe</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: CCED-UNSUBSCRIBE%%">CCED Webinar List</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: IDT-UNSUBSCRIBE%%">IDT - Newsletter</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: IDWeb-UNSUBSCRIBE%%">ID Webinar List</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: CDEWeb-UNSUBSCRIBE%%">CDEWorld Webinar List</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: Nobel-UNSUBSCRIBE%%">Nobel Webinar List</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: CDELab-UNSUBSCRIBE%%">CDEWorld - Lab </option>
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
                  <!-- <option value="2018">Send Year - 2018</option>
                  <option value="2019">Send Year - 2019</option> -->
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
                    <!-- <p class="inputTest" v-model="field.value">{{field.label}}</p> -->
                    <input type="text" class="input" :name="field.name" :id="index" :value="field.value" :placeholder="field.label" @change="fieldUpdate($event.target.value,index)">
                    <!-- <p class="inputTest" v-model="field.value">{{field.value}}</p> -->
                  </div>
                  <div class="control" v-if="field.type == 'textarea'">
                    <!-- <p class="inputTest" v-model="field.value">{{field.label}}</p> -->
                     <textarea class="textarea" :name="field.name" id="" :value="field.value" cols="30" rows="5"></textarea>
                    <!-- <p class="inputTest" v-model="field.value">{{field.value}}</p> -->
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
    props: ['emailTemplate', 'fields'],
    data () {
        return {
            currentTemplate: '',
            currentMonth: '',
            currentYear: '',
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
            var currentTemplate = document.getElementById("ddlViewBy").value;
            console.log(currentTemplate);
            return currentTemplate;
        }
        
    }
}
</script>

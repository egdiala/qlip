<template>
<v-container>
    <v-row class="text-center d-flex align-center">
      <v-col cols="12" class="my-5">
        <h1 class="font-weight-light">COUNTDOWN TO PRIVATE SALES</h1>
            <vue-countdown-timer id="timer"
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="'2021-5-10 23:27:00'"
      :end-time="getEndTime()"
      :interval="1000"
      label-position="begin"
      :end-text="'Private Sale!'"
      :day-txt="'days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">

      <template slot="countdown" slot-scope="scope">
        <div id="countdown">
          <ul>
            <li><span id="days">{{scope.props.days}}</span>{{scope.props.dayTxt}}</li>
            <li><span id="hours">{{scope.props.hours}}</span>{{scope.props.hourTxt}}</li>
            <li><span id="minutes">{{scope.props.minutes}}</span>{{scope.props.minutesTxt}}</li>
            <li><span id="seconds">{{scope.props.seconds}}</span>{{scope.props.secondsTxt}}</li>
          </ul>
        </div>
      </template>

      <template slot="end-text" slot-scope="scope">
        <span style="color: green">{{ scope.props.endText}}</span>
      </template>
    </vue-countdown-timer>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  name: 'Private Sales',
  data() {
    return {
      endTime:1621425600000,
    }
  },
  mounted() {
  },
  methods: {
    startCallBack: function(x) {
      console.log(x);
    },
    endCallBack: function(x) {
      console.log(x);
    },
    getEndTime(){
      var dt =  new Date(this.endTime);
      var endTimeDate = dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate()+" "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
      return endTimeDate;
    }
  },
}
</script>

<style scoped>
li {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
}

li span {
  display: block;
  font-size: 4.5rem;
}

@media all and (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }

  li {
    font-size: 1.125rem;
    padding: .75rem;
  }

  li span {
    font-size: 3.375rem;
  }
}
</style>

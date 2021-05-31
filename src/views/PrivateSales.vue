<template>
<v-container>
    <v-row class="d-flex align-center">
      <v-col v-if="!ended" cols="12" class="text-center my-5">
        <h1 class="font-weight-light">{{ ended ? 'PRIVATE SALE IS NOW LIVE!' : 'COUNTDOWN TO PRIVATE SALES' }}</h1>
            <vue-countdown-timer id="timer"
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="'2021-5-10 23:27:00'"
      :end-time="getEndTime()"
      :interval="1000"
      label-position="begin"
      :end-text="''"
      :day-txt="'days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">

      <template slot="countdown" slot-scope="scope">
        <div id="countdown">
          <ul>
            <li class="countLi"><span id="days">{{scope.props.days}}</span>{{scope.props.dayTxt}}</li>
            <li class="countLi"><span id="hours">{{scope.props.hours}}</span>{{scope.props.hourTxt}}</li>
            <li class="countLi"><span id="minutes">{{scope.props.minutes}}</span>{{scope.props.minutesTxt}}</li>
            <li class="countLi"><span id="seconds">{{scope.props.seconds}}</span>{{scope.props.secondsTxt}}</li>
          </ul>
        </div>
      </template>

      <template slot="end-text" slot-scope="scope">
        <span style="color: green">{{ scope.props.endText}}</span>
      </template>
    </vue-countdown-timer>

      </v-col>
    <v-col v-else>
      <h1 class="font-weight-light text-center">{{ ended ? 'PRIVATE SALE IS NOW LIVE!' : 'COUNTDOWN TO PRIVATE SALES' }}</h1>
      <p class="text-center">To participate in the private sale, make sure you have at least 0.25 bnb</p>
      <ol class="mx-auto">
        <li>Connect your wallet to <a href="https://www.qlipit.io" target="_blank">qlipit.io</a></li>
        <li>Click on "BUY QLIP TOKENS" on the home page.</li>
        <li>Input the amount of BNB and complete the transaction (Max 2 BNB)</li>
      </ol>
    </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  name: 'PrivateSales',
  data() {
    return {
      endTime:1621425600000,
      ended: false
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
      this.ended = true;
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
.countLi {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
}

.countLi span {
  display: block;
  font-size: 4.5rem;
}

a {
  color: blue;
  text-decoration-line: none;
}

@media all and (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }

  .countLi {
    font-size: 1.125rem;
    padding: .75rem;
  }

  .countLi span {
    font-size: 3.375rem;
  }
}
</style>

$(function(){
  console.log('scripts loaded');

//SFSP Participation Chart ----------------------------
var url = './js/summer_meals.json';
var meals = [];
var year = [];
var summer = [];
var school = [];

$.ajax({
  type: 'GET',
  dataType: 'json',
  data: meals,
  url: url,
  async: true,
  success: function(meals){
    console.log(meals);

    for (i=0; i < meals.length; i++){
      year.push(meals[i].Year);
      summer.push(meals[i].percSFSP);
      school.push(meals[i].percFRL);
    }//for loop

    buildChart1();

  } //success

});//ajax

function buildChart1(){
Highcharts.chart('meals', {

    chart: {
        type: 'line'
    },

    data: meals,

    title: {
        text: 'Summer Food Service Participation'
    },

    subtitle: {
        text: 'Source: USDA'
    },

    xAxis: {
        categories: year
      },

    yAxis: [{ // left y axis
        title: {
            text: 'Percent Students Participating'
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }, { // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }],

    legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },

    tooltip: {
        shared: true,
        crosshairs: true
    },

    plotOptions: {
        series: {

        }
    },

    series: [{
        name: 'SFSP',
        data: summer
    }, {
        name: 'NSLP',
        data: school
    }]
});

}


// Cash Payments Chart --------------------------------
  var url = './js/cash_payments.json';
  var cash = [];
  var xCat = [];
  var cashNow = [];
  var cashPos = [];

  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: cash,
    url: url,
    async: true,
    success: function(cash){
      console.log(cash);

      for (i=0; i < cash.length; i++){
        if(cash[i].STATENAME != 'Total'){
        xCat.push(cash[i].STATENAME);
        cashNow.push(cash[i].CASH_2017);
        cashPos.push(cash[i].ADDED_CASH);
      }
      }//for loop

      buildChart();

    } //success

  });//ajax

function buildChart(){
  Highcharts.chart('cash', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'The Summer Meals Dollars States Are Missing Out On'
    },
    xAxis: {
        categories: xCat
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Cash Payments in 2017'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Possible Dollars',
        data: cashPos
    },
    {
        name: 'Dollars 2017',
        data: cashNow
    }]
  });
  } //close buildChart













}); //END FUNC READY

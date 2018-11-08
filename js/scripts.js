$(function(){
  console.log('scripts loaded');

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
  Highcharts.chart('meals', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart'
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

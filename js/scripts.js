$(document).ready(function(){
  console.log('scripts loaded');

  var url = '/js/meals.json';
  var meals = '';


    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url,
      data: meals,
      async: true,
      success: function(meals){
        console.log(meals);

        var chart = new Taucharts.Chart({
                    guide: {
                      x: {label:'Year'},  // custom label for X axis
                      y: {label:'Percentage of Students'},    // custom label for Y axis
                      padding: {b:40,l:40,t:10,r:10}   // chart paddings
                    },
                    data: meals,
                    type: 'line',
                    x: 'Year',
                    y: 'Percentage Eligible Summer Participation',
                    plugins: [
                       Taucharts.api.plugins.get('tooltip')({
                         fields: ['name', 'Infant Mortality Rate', 'Life Expectancy', 'Per Capita GDP', 'Obesity Rate', 'Unemployment Rate']
                       }),
                       Taucharts.api.plugins.get('legend')()
                    ]
                }); // end Taucharts

                chart.renderTo('#meals');

          }//success

        });//ajax








}); //END DOC READY

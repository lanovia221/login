var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets:[{
            label: 'Earnings in $',
            data: [2050,1900,2100,1800,2500,2000,1950, 2900,2300,2800,2450,2600],
            backgroundColor: [
                'rgba(85,85,85,1)',
                
            ],
            borderColor:  [
                'rgba(41,155,99)',
            ],
            borderWidth: 1
        }]

            
        },option: {
            responsive:true
        }
    });
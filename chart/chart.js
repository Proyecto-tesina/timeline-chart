(function () {
    google.charts.load("current", {
        packages: ["timeline"]
    });
    google.charts.setOnLoadCallback(drawChart);
})()

async function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({
        type: 'string',
        id: 'Description'
    });
    dataTable.addColumn({
        type: 'string',
        id: 'Name'
    });
    dataTable.addColumn({
        type: 'date',
        id: 'Start'
    });
    dataTable.addColumn({
        type: 'date',
        id: 'End'
    });

    let drt_monitor_data = await fetch('http://127.0.0.1:8000/events/drt/').then(response => response.json())
    let cam_detection_data = await fetch('http://127.0.0.1:8000/events/camera/').then(response => response.json())
    let player_actions_data = await fetch('http://127.0.0.1:8000/events/player/').then(response => response.json())

    var rowComponents = [
        new DrtMonitorComponent(drt_monitor_data),
        new CameraDetectionComponent(cam_detection_data),
        new PlayerActionComponent(player_actions_data)
    ];

    var rows = rowComponents.flatMap((component) => component.rows().flat());

    dataTable.addRows(rows);

    var options = {
        vAxis: {
            title: 'Experiment Statistics'
        },
        timeline: {
            showBarLabels: false,
            colorByRowLabel: true,
        },
        hAxis: {
            format: 'HH:mm:ss'
        },
        avoidOverlappingGridLines: false,
    };

    chart.draw(dataTable, options);
}

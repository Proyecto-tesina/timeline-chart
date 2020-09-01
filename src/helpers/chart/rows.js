import { Cell } from './cells.js';

class Row {

    constructor(chart) {
        this.chart = chart
        this.experiment = chart.experiment;
    }

    getEventsByStatus(eventStatus) {
        return this.events.filter(
            event => eventStatus.includes(event.status)
        )
    }

    getEventsByName(eventName) {
        return this.experiment.events.filter(
            event => event.name === eventName
        )
    }

    elements() {
        const cells = this.cells();

        return cells.map(cell => [
            cell.name,
            cell.description,
            cell.startTimestamp(),
            cell.endTimestamp()
        ])
    }
}

export class CameraDetectionRow extends Row {

    constructor(chart) {
        super(chart);

        this.events = this.getEventsByName('CAMERA');
    }

    detectionsEvents() {
        return this.getEventsByStatus(['I see you']);
    }

    nonDetectionsEvents() {
        return this.getEventsByStatus(['I don\'t see you']);
    }

    nextDetection(nonDetection) {
        const detectionsEvents = this.detectionsEvents();

        const nextDetections = detectionsEvents.filter(
            (detection) => detection.timestamp >= nonDetection.timestamp
        )

        return nextDetections.length ? nextDetections[0] : nonDetection
    }

    distractionCells() {
        const name = 'Distraction time';
        const description = 'Camera NO detection';

        const nonDetectionsEvents = this.nonDetectionsEvents();

        const cells = nonDetectionsEvents.map(
            (nonDetectionEvent, index) => new Cell({
                name: name,
                description: `${description} ${index}`,
                startEvent: nonDetectionEvent,
                endEvent: this.nextDetection(nonDetectionEvent),
                chart: this.chart
            })
        );

        return cells
    }

    cells() {
        const distractionCells = this.distractionCells();

        return distractionCells;
    }
}

export class DrtMonitorRow extends Row {

    constructor(chart) {
        super(chart);

        this.events = this.getEventsByName('DRT');
    }

    drtsOnEvents() {
        return this.getEventsByStatus(["start", "end"])
    }

    drtCells() {
        const name = 'DRT on';
        const description = 'Light';
        const cells = [];

        const drtsOnEvents = this.drtsOnEvents();

        for (var i = 0; i < drtsOnEvents.length; i += 2) {
            const cell = new Cell({
                name: name,
                description: `${description} ${i / 2}`,
                startEvent: drtsOnEvents[i],
                endEvent: drtsOnEvents[i + 1],
                chart: this.chart
            });

            cells.push(cell);
        }

        return cells;
    }

    mistakesEvents() {
        return this.getEventsByStatus(["mistake"])
    }

    mistakeCells() {
        const mistakesEvents = this.mistakesEvents();

        const cells = mistakesEvents.map(
            (mistake, index) => new Cell({
                name: 'Mistakes',
                description: `Mistake ${index}`,
                startEvent: mistake,
                endEvent: mistake,
                chart: this.chart
            })
        );

        return cells
    }

    cells() {
        const drtCells = this.drtCells();
        const mistakeCells = this.mistakeCells();

        return drtCells.concat(mistakeCells);
    }
}

export class PlayerActionRow extends Row {

    constructor(chart) {
        super(chart);

        this.events = this.getEventsByName('PLAYER');
    }

    playerActionCells() {
        const cells = this.events.map(
            (event) => new Cell({
                name: event.status,
                description: event.status,
                startEvent: event,
                endEvent: event,
                chart: this.chart
            })
        );

        return cells
    }

    cells() {
        return this.playerActionCells()
    }
}
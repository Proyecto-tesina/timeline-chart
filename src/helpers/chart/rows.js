import { Cell } from "./cells.js";

class Row {
  constructor(chart) {
    this.chart = chart;
    this.experiment = chart.experiment;
  }

  getEventsByStatus(eventStatus) {
    let events = this.events.filter((event) =>
      eventStatus.includes(event.status)
    );
    return events.sort(function (a, b) {
      return a.timestamp - b.timestamp;
    });
  }

  getEventsByName(eventName) {
    let events = this.experiment.events.filter(
      (event) => event.name === eventName
    );
    return events.sort(function (a, b) {
      return a.timestamp - b.timestamp;
    });
  }

  elements() {
    const cells = this.cells();

    return cells.map((cell) => [
      cell.name,
      cell.description,
      cell.color(),
      cell.startTimestamp(),
      cell.endTimestamp(),
    ]);
  }
}

export class CameraDetectionRow extends Row {
  constructor(chart) {
    super(chart);

    this.events = this.getEventsByName("CAMERA");
  }

  detectionsEvents() {
    return this.getEventsByStatus(["I see you"]);
  }

  nonDetectionsEvents() {
    return this.getEventsByStatus(["I don't see you"]);
  }

  nextDetection(nonDetection) {
    const detectionsEvents = this.detectionsEvents();

    const nextDetections = detectionsEvents.filter(
      (detection) => detection.timestamp >= nonDetection.timestamp
    );

    return nextDetections.length ? nextDetections[0] : nonDetection;
  }

  distractionCells() {
    const name = "Distraction time";
    const description = "Camera NO detection";

    const nonDetectionsEvents = this.nonDetectionsEvents();

    const cells = nonDetectionsEvents.map(
      (nonDetectionEvent, index) =>
        new Cell({
          name: name,
          description: `${description} ${index}`,
          startEvent: nonDetectionEvent,
          endEvent: this.nextDetection(nonDetectionEvent),
          chart: this.chart,
        })
    );

    return cells;
  }

  cells() {
    const distractionCells = this.distractionCells();

    return distractionCells;
  }
}

export class DrtMonitorRow extends Row {
  constructor(chart) {
    super(chart);

    this.events = this.getEventsByName("DRT");
  }

  drtsOnEvents() {
    return this.getEventsByStatus(["start", "end"]);
  }

  drtDescription(nextEvent) {
    if (nextEvent === undefined || nextEvent.status === "end")
      return "Light on";

    return "Light lost";
  }

  drtCells() {
    const name = "DRT on";
    const cells = [];

    const drtsOnEvents = this.drtsOnEvents();

    for (var i = 0; i < drtsOnEvents.length; i += 2) {
      const nextEvent = drtsOnEvents[i + 1];

      const description = this.drtDescription(nextEvent);

      const cell = new Cell({
        name: name,
        description: description,
        startEvent: drtsOnEvents[i],
        endEvent: nextEvent,
        chart: this.chart,
      });

      cells.push(cell);
    }

    return cells;
  }

  mistakesEvents() {
    return this.getEventsByStatus(["mistake"]);
  }

  mistakeCells() {
    const mistakesEvents = this.mistakesEvents();

    const cells = mistakesEvents.map(
      (mistake, index) =>
        new Cell({
          name: "Mistakes",
          description: `Mistake ${index}`,
          startEvent: mistake,
          endEvent: mistake,
          chart: this.chart,
        })
    );

    return cells;
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

    this.events = this.getEventsByName("PLAYER");
  }

  cells() {
    const cells = this.events.map(
      (event, index) =>
        new Cell({
          name: event.status,
          description: event.status,
          startEvent: event,
          endEvent: this.events[index + 1],
          chart: this.chart,
        })
    );

    return cells;
  }
}

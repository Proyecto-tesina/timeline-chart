import { CameraDetectionRow, PlayerActionRow, DrtMonitorRow } from "./rows.js";

const COLUMNS = [
  { type: "string", id: "Description" },
  { type: "string", id: "Name" },
  { type: "string", id: "style", role: "style" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
];

export default class ExperimentChart {
  constructor(experiment) {
    this.experiment = experiment;

    this.experiment.events.forEach((event) => {
      event.timestamp = new Date(event.timestamp);
    });

    this.rows = [
      new DrtMonitorRow(this),
      new CameraDetectionRow(this),
      new PlayerActionRow(this),
    ];
  }

  endTime() {
    const endTimeExperiment = this.experiment.ended_at;

    return new Date(endTimeExperiment);
  }

  isFinished() {
    const endTimeExperiment = this.experiment.ended_at;

    return endTimeExperiment !== null;
  }

  columns() {
    return COLUMNS;
  }

  rowsElements() {
    const rows = this.rows.flatMap((row) => row.elements());
    return rows;
  }

  data() {
    let data = [];

    data.push(this.columns());
    data = data.concat(this.rowsElements());
    return data;
  }
}
